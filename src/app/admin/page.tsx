"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { PortfolioItem, PortfolioCategory } from "@/data/portfolio-items";

const categories: PortfolioCategory[] = [
  "Mariage",
  "Décoration",
  "Fleurs",
  "Mode",
  "Parfum",
  "Événements de luxe",
];

export default function AdminPage() {
  const router = useRouter();
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<PortfolioCategory>("Mariage");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [itemToDelete, setItemToDelete] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  async function loadItems() {
    setLoading(true);
    const res = await fetch("/api/admin/portfolio");
    const data = await res.json();
    setItems(data);
    setLoading(false);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!file || !title) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);

    await fetch("/api/admin/portfolio", {
      method: "POST",
      body: formData,
    });

    setTitle("");
    setDescription("");
    setFile(null);
    setUploading(false);
    loadItems();
  }

  async function confirmDelete() {
    if (!itemToDelete) return;
    setDeleting(true);
    await fetch(`/api/admin/portfolio/${itemToDelete.id}`, { method: "DELETE" });
    setDeleting(false);
    setItemToDelete(null);
    loadItems();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  const count = items.length.toString().padStart(2, "0");

  return (
    <main className="min-h-screen bg-background pt-[130px] pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-10">
        {/* En-tête éditorial */}
        <header className="flex items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <p className="font-sans text-[11px] font-light uppercase tracking-[0.3em] text-accent">
              Atelier · Espace privé
            </p>
            <h1 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Le Catalogue
            </h1>
            <p className="mt-2 font-sans text-sm font-light text-muted-foreground">
              Composez la collection présentée sur le site
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="whitespace-nowrap border-b border-transparent pb-1 font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
          >
            Quitter l&apos;atelier
          </button>
        </header>

        {/* Formulaire d'ajout */}
        <section className="mt-14">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl font-light text-accent">01</span>
            <h2 className="font-display text-xl font-medium">Ajouter une pièce</h2>
          </div>

          <form
            onSubmit={handleAdd}
            className="mt-6 grid gap-8 border border-border bg-card p-6 sm:p-10 md:grid-cols-[220px_1fr] md:gap-10"
          >
            <div>
              <label
                htmlFor="photo-input"
                className="group relative flex aspect-[4/5] cursor-pointer flex-col items-center justify-center overflow-hidden border border-dashed border-border bg-background/60 transition-colors hover:border-accent"
              >
                {preview ? (
                  <img src={preview} alt="Aperçu" className="h-full w-full object-cover" />
                ) : (
                  <span className="px-4 text-center font-sans text-[11px] font-light uppercase tracking-[0.2em] text-muted-foreground">
                    Choisir un cliché
                  </span>
                )}
              </label>
              <input
                id="photo-input"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="sr-only"
              />
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block font-sans text-[11px] font-light uppercase tracking-[0.2em] text-muted-foreground">
                  Intitulé de la pièce
                </label>
                <input
                  type="text"
                  placeholder="Mariage au Château de Versailles"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border-b border-border bg-transparent pb-2 font-display text-lg focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-sans text-[11px] font-light uppercase tracking-[0.2em] text-muted-foreground">
                  Discipline
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as PortfolioCategory)}
                  className="w-full border-b border-border bg-transparent pb-2 font-sans text-sm focus:border-accent focus:outline-none"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block font-sans text-[11px] font-light uppercase tracking-[0.2em] text-muted-foreground">
                  Note d&apos;intention (optionnel)
                </label>
                <textarea
                  placeholder="Quelques mots sur cette réalisation..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full resize-none border-b border-border bg-transparent pb-2 font-sans text-sm leading-relaxed focus:border-accent focus:outline-none"
                  rows={2}
                />
              </div>

              <button
                type="submit"
                disabled={uploading || !file || !title}
                className="mt-2 w-full border border-foreground bg-foreground py-3 font-sans text-xs font-light uppercase tracking-[0.25em] text-background transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-30"
              >
                {uploading ? "Envoi en cours..." : "Ajouter au catalogue"}
              </button>
            </div>
          </form>
        </section>

        {/* Collection existante */}
        <section className="mt-16">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-2xl font-light text-accent">02</span>
            <h2 className="font-display text-xl font-medium">La collection</h2>
            <span className="ml-auto font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
              {count} {items.length > 1 ? "pièces" : "pièce"}
            </span>
          </div>

          {loading ? (
            <p className="mt-8 font-sans text-sm font-light text-muted-foreground">
              Chargement de la collection...
            </p>
          ) : items.length === 0 ? (
            <div className="mt-8 border border-dashed border-border py-16 text-center">
              <p className="font-sans text-sm font-light text-muted-foreground">
                Le catalogue est vide. Ajoutez la première pièce ci-dessus.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 md:grid-cols-4">
              {items.map((item) => (
                <div key={item.id} className="group relative aspect-[4/5] bg-card">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-display text-sm font-medium leading-tight text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 font-sans text-[10px] font-light uppercase tracking-[0.15em] text-white/70">
                      {item.category}
                    </p>
                    <button
                      onClick={() => setItemToDelete(item)}
                      className="mt-3 self-start border-b border-white/40 pb-0.5 font-sans text-[10px] font-light uppercase tracking-[0.2em] text-white/90 transition-colors hover:border-white hover:text-white"
                    >
                      Retirer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Modale de confirmation — retrait d'une pièce */}
      {itemToDelete && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() => !deleting && setItemToDelete(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md border border-border bg-card p-8 shadow-soft sm:p-10"
          >
            <div className="mx-auto aspect-[4/5] w-32 overflow-hidden">
              <img
                src={itemToDelete.image}
                alt={itemToDelete.alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 text-center">
              <p className="font-sans text-[11px] font-light uppercase tracking-[0.3em] text-accent">
                Retrait du catalogue
              </p>
              <h3 className="mt-3 font-display text-xl font-medium leading-snug">
                {itemToDelete.title}
              </h3>
              <p className="mt-3 font-sans text-sm font-light leading-relaxed text-muted-foreground">
                Cette pièce sera définitivement retirée de la collection présentée
                sur le site. Cette action est irréversible.
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setItemToDelete(null)}
                disabled={deleting}
                className="flex-1 border border-border py-3 font-sans text-xs font-light uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground disabled:opacity-50"
              >
                Annuler
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="flex-1 border border-destructive bg-destructive py-3 font-sans text-xs font-light uppercase tracking-[0.2em] text-destructive-foreground transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {deleting ? "Retrait..." : "Confirmer le retrait"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
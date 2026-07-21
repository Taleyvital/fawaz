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

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<PortfolioCategory>("Mariage");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

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

  async function handleDelete(id: string) {
    if (!confirm("Supprimer cette photo ?")) return;
    await fetch(`/api/admin/portfolio/${id}`, { method: "DELETE" });
    loadItems();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <main className="min-h-screen bg-background px-4 pt-[130px] pb-10 sm:pb-14">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center justify-between border-b border-border pb-6">
          <div>
            <h1 className="font-display text-2xl font-medium sm:text-3xl">
              Gestion des photos
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Ajoutez ou supprimez les photos du portfolio
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Déconnexion
          </button>
        </div>

        <form
          onSubmit={handleAdd}
          className="mt-8 space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <h2 className="font-display text-lg font-medium">Ajouter une photo</h2>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-primary-foreground"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Titre
            </label>
            <input
              type="text"
              placeholder="Ex: Mariage au Château de Versailles"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Catégorie
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as PortfolioCategory)}
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Description (optionnel)
            </label>
            <textarea
              placeholder="Quelques mots sur cette réalisation..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm"
              rows={3}
            />
          </div>

          <button
            type="submit"
            disabled={uploading || !file || !title}
            className="w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {uploading ? "Envoi en cours..." : "Ajouter la photo"}
          </button>
        </form>

        <div className="mt-10">
          <h2 className="font-display text-lg font-medium">
            Photos existantes ({items.length})
          </h2>

          {loading ? (
            <p className="mt-4 text-sm text-muted-foreground">Chargement...</p>
          ) : items.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">
              Aucune photo pour le moment.
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-3 shadow-sm sm:p-4"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex-shrink-0 rounded-md bg-red-500/10 px-3 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/20"
                  >
                    Supprimer
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
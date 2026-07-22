"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Mot de passe incorrect");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        {/* Ornement d'ouverture */}
        <div className="mb-10 text-center">
          <span className="font-display text-3xl font-light italic text-accent">R</span>
          <p className="mt-4 font-sans text-[11px] font-light uppercase tracking-[0.35em] text-muted-foreground">
            Atelier Reda Fawaz
          </p>
          <div className="mx-auto mt-6 h-px w-10 bg-border" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="text-center">
            <h1 className="font-display text-2xl font-medium leading-tight">
              Espace privé
            </h1>
            <p className="mt-2 font-sans text-sm font-light text-muted-foreground">
              Réservé au propriétaire de la maison
            </p>
          </div>

          <div>
            <label className="mb-2 block text-center font-sans text-[11px] font-light uppercase tracking-[0.25em] text-muted-foreground">
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-border bg-transparent py-2 text-center font-display text-lg tracking-[0.2em] focus:border-accent focus:outline-none"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-center font-sans text-xs font-light uppercase tracking-[0.15em] text-destructive">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full border border-foreground bg-foreground py-3 font-sans text-xs font-light uppercase tracking-[0.3em] text-background transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? "Vérification..." : "Entrer"}
          </button>
        </form>
      </div>
    </main>
  );
}
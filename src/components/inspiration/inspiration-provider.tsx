"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type InspirationContextValue = {
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSavedItem: (id: string) => void;
};

const InspirationContext = createContext<InspirationContextValue | null>(null);

export function InspirationProvider({ children }: { children: ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const isSaved = useCallback((id: string) => savedIds.includes(id), [savedIds]);

  const toggleSavedItem = useCallback((id: string) => {
    setSavedIds((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id],
    );
  }, []);

  const value = useMemo(
    () => ({ savedIds, isSaved, toggleSavedItem }),
    [savedIds, isSaved, toggleSavedItem],
  );

  return (
    <InspirationContext.Provider value={value}>
      {children}
    </InspirationContext.Provider>
  );
}

export function useInspiration() {
  const context = useContext(InspirationContext);

  if (!context) {
    throw new Error("useInspiration must be used inside InspirationProvider.");
  }

  return context;
}

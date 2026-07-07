"use client";

type InspirationDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function InspirationDrawer({
  open,
  onOpenChange,
}: InspirationDrawerProps) {
  return (
    <aside
      className="glass-panel fixed right-0 top-0 z-[60] h-full w-full max-w-sm border-l border-border p-8 transition-transform duration-500 md:max-w-md"
      data-open={open}
    >
      <button type="button" onClick={() => onOpenChange(false)}>
        Fermer
      </button>
    </aside>
  );
}

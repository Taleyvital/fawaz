import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type BaseFieldProps = {
  label: string;
};

export function LuxuryInput({
  label,
  ...props
}: BaseFieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      {label}
      <input
        className="border-0 border-b border-foreground bg-transparent px-0 py-3 text-base normal-case tracking-[0.03em] outline-none transition-colors focus:border-accent"
        {...props}
      />
    </label>
  );
}

export function LuxurySelect({
  label,
  children,
  ...props
}: BaseFieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      {label}
      <select
        className="border-0 border-b border-foreground bg-transparent px-0 py-3 text-base normal-case tracking-[0.03em] outline-none transition-colors focus:border-accent"
        {...props}
      >
        {children}
      </select>
    </label>
  );
}

export function LuxuryTextarea({
  label,
  ...props
}: BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="grid gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      {label}
      <textarea
        className="resize-none border-0 border-b border-foreground bg-transparent px-0 py-3 text-base normal-case tracking-[0.03em] outline-none transition-colors focus:border-accent"
        {...props}
      />
    </label>
  );
}

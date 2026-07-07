type EditorialHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function EditorialHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: EditorialHeadingProps) {
  return (
    <header className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      {eyebrow ? (
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-5xl font-semibold leading-tight md:text-[84px] md:leading-[92px]">
        {title}
      </h1>
      {description ? (
        <p className="mt-6 max-w-2xl text-lg font-light leading-8 tracking-[0.05em] text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}

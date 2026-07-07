import Image from "next/image";

type ParallaxLayerProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function ParallaxLayer({
  src,
  alt,
  priority = false,
  className,
}: ParallaxLayerProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={className}
      sizes="100vw"
    />
  );
}

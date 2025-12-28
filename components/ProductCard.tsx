import Image from "next/image";

interface ProductCardProps {
  image: string;
  alt: string;
}

export default function ProductCard({ image, alt }: ProductCardProps) {
  return (
    <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}


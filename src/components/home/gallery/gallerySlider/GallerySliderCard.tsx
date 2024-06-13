import Image from "next/image";

interface GallerySliderCardProps {
  galleryItem: {
    image: string;
    alt: string;
  };
}

export default function GallerySliderCard({
  galleryItem,
}: GallerySliderCardProps) {
  const { image, alt } = galleryItem;
  return (
    <div className="aspect-[243/243] tablet:aspect-[628/285] bg-secondary bg-opacity-60">
      <Image
        src={`/images/galleryImages/${image}`}
        width="0"
        height="0"
        alt={alt}
        sizes="100%"
        className={`w-full h-auto`}
      />
    </div>
  );
}

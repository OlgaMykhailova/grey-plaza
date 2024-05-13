import Image from "next/image";

interface InfrastructureSliderCardProps {
  infrastructureItem: {
    image: string;
    alt: string;
  };
}

export default function InfrastructureSliderCard({
  infrastructureItem,
}: InfrastructureSliderCardProps) {
  const { image, alt } = infrastructureItem;
  return (
    <Image
      src={`/images/galleryImages/${image}`}
      width="0"
      height="0"
      alt={alt}
      sizes="100%"
      className={`w-full h-full`}
    />
  );
}

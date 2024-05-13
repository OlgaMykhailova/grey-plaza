import Image from "next/image";

interface InfrastructureSliderCardProps {
  infrastructureItem: {
    image: string;
    alt: string;
    title: string;
    description: string;
  };
}

export default function InfrastructureSliderCard({
  infrastructureItem,
}: InfrastructureSliderCardProps) {
  const { image, alt, title, description } = infrastructureItem;
  return (
    <div className="relative z-10 flex items-end w-full aspect-[1/1]">
      <Image
        src={`/images/infrastructureImages/${image}`}
        width="0"
        height="0"
        alt={alt}
        sizes="100%"
        className={`absolute top-0 left-0 z-[-10] w-full h-full`}
      />
      <div className="w-full h-[88px] p-3 bg-cardGradient text-white-text">
        <h3 className="text-mdb mb-1">{title}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}

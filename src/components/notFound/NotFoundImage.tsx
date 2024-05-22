import Image from "next/image";
import SlideWrapper from "../shared/slider/SlideWrapper";

export default function NotFoundImage() {
  return (
    <div className="flex items-center justify-center gap-x-3 mb-[90px]">
      <Image
        src={`/images/icons/4.svg`}
        width="0"
        height="0"
        alt="number four icon"
        sizes="100%"
        className="w-[77px] h-[103px]"
      />
      <SlideWrapper className="w-[140px] h-[126px] py-2.5 px-8">
        <Image
          src={`/images/icons/0.svg`}
          width="0"
          height="0"
          alt="number zero icon"
          sizes="100%"
          className="w-[76px] h-[106px]"
        />
      </SlideWrapper>
      <Image
        src={`/images/icons/4.svg`}
        width="0"
        height="0"
        alt="number four icon"
        sizes="100%"
        className="w-[77px] h-[103px]"
      />
    </div>
  );
}

import Image from "next/image";
import SlideWrapper from "../shared/slider/SlideWrapper";

export default function NotFoundImage() {
  return (
    <div className="flex items-center justify-center gap-x-3 tablet:gap-x-[25px] w-[320px] tablet:w-[712px] laptop:w-[806px] mx-auto mb-[90px] tablet:mb-[56px]">
      <Image
        src={`/images/icons/4.svg`}
        width="0"
        height="0"
        alt="number four icon"
        sizes="100%"
        className="w-[77px] tablet:w-[171px] h-[103px] tablet:h-[230px]"
      />
      <SlideWrapper className="py-2.5 tablet:py-[23px] px-8 tablet:px-[75px]">
        <Image
          src={`/images/icons/0.svg`}
          width="0"
          height="0"
          alt="number zero icon"
          sizes="100%"
          className="w-[76px] tablet:w-[169px] h-[106px] tablet:h-[235px]"
        />
      </SlideWrapper>
      <Image
        src={`/images/icons/4.svg`}
        width="0"
        height="0"
        alt="number four icon"
        sizes="100%"
        className="w-[77px] tablet:w-[171px] h-[103px] tablet:h-[230px]"
      />
    </div>
  );
}

import MarqueeLine from "./MarqueeLine";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../shared/Container";
import NotFoundImage from "./NotFoundImage";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <section className="relative z-10 pt-[132px] tablet:pt-[112px] pb-[102px] tablet:pb-[74px]">
      <Image
        src={`/images/bgImages/notFoundBgMobile.webp`}
        width="0"
        height="0"
        alt="building background"
        sizes="100%"
        className="tablet:hidden absolute z-[-10] bottom-0 left-0 min-h-[605px] w-full h-auto object-cover object-center"
      />
      <Image
        src={`/images/bgImages/notFoundBgTablet.webp`}
        width="0"
        height="0"
        alt="building background"
        sizes="100%"
        className="hidden tablet:block laptop:hidden absolute z-[-10] bottom-0 left-0 min-h-[720px] w-full h-auto object-cover object-center"
      />
      <Container>
        <p className="w-[236px] tablet:w-[307px] mb-[100px] tablet:mb-[84px] text-base tablet:text-md laptop:text-lb">
          {t("notFounDescription")}
        </p>
        <NotFoundImage />
      </Container>
      <MarqueeLine />
    </section>
  );
}

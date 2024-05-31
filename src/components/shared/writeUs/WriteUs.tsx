import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../Container";
import SectionTitle from "../../shared/SectionTitle";
import ClientApplication from "./ClientApplication";

export default function WriteUs() {
  const t = useTranslations("WriteUs");

  return (
    <section
      id="write-us"
      className="relative z-10 min-h-[792px] tablet:min-h-[614px] laptop:min-h-[594px] mb-10 tablet:mb-[60px] scroll-mt-[72px] tablet:scroll-mt-20"
    >
      <Image
        src={`/images/bgImages/writeUsBgImageMobile.webp`}
        width="0"
        height="0"
        alt="building background"
        sizes="100%"
        className="tablet:hidden absolute z-[-10] min-h-[792px] w-full h-auto object-cover object-left"
      />
      <Image
        src={`/images/bgImages/writeUsBgImageTablet.webp`}
        width="0"
        height="0"
        alt="building background"
        sizes="100%"
        className="hidden tablet:block laptop:hidden absolute z-[-10] min-h-[614px] w-full h-auto object-cover object-left"
      />
      <Image
        src={`/images/bgImages/writeUsBgImageLaptop.webp`}
        width="0"
        height="0"
        alt="building background"
        sizes="100%"
        className="hidden laptop:block absolute z-[-10] min-h-[594px] w-full h-auto object-cover object-left"
      />
      <div className="h-full min-h-[792px] tablet:min-h-[614px] laptop:min-h-[594px] bg-gradient tablet:bg-writeUsGradientTablet">
        <Container className="flex flex-col tablet:flex-row items-center tablet:items-start justify-between tablet:gap-x-4 h-full py-10">
          <div>
            <SectionTitle className="tablet:w-[92.7%] text-white-text">
              {t("subTitle")}
            </SectionTitle>
            <p className="mb-5 text-base text-white-text text-center">
              {t("leaveRequest")}
            </p>
          </div>
          <ClientApplication />
        </Container>
      </div>
    </section>
  );
}

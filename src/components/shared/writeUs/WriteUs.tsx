import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "../Container";
import SectionTitle from "../../shared/SectionTitle";
import WriteUsForm from "./WriteUsForm";

export default function WriteUs() {
  const t = useTranslations("WriteUs");

  return (
    <section id="write-us" className="min-h-[784px] mb-10 scroll-mt-[72px]">
      <Image
        src={`/images/bgImages/writeUsBgImageMobile.webp`}
        width="0"
        height="0"
        alt="building background"
        sizes="100%"
        className="absolute z-[-10] w-full h-full min-h-[784px] object-cover object-left"
      />
      <div className="min-h-[784px] h-full bg-gradient bg-opacity-90">
        <Container className="flex flex-col items-center py-10">
          <SectionTitle className="text-white-text">
            {t("subTitle")}
          </SectionTitle>
          <p className="mb-5 text-base text-white-text text-center">
            {t("leaveRequest")}
          </p>
          <WriteUsForm />
        </Container>
      </div>
    </section>
  );
}

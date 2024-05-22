import MarqueeLine from "./MarqueeLine";
import { useTranslations } from "next-intl";
import Container from "../shared/Container";
import NotFoundImage from "./NotFoundImage";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <section className="pt-[132px] tablet:pt-[112px] pb-[102px] tablet:pb-[74px]">
      <Container>
        <p className="w-[236px] tablet:w-[307px] mb-[100px] tablet:mb-[84px] text-base tablet:text-md">
          {t("notFounDescription")}
        </p>
        <NotFoundImage />
      </Container>
      <MarqueeLine />
    </section>
  );
}

import MarqueeLine from "./MarqueeLine";
import { useTranslations } from "next-intl";
import Container from "../shared/Container";
import NotFoundImage from "./NotFoundImage";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <section className="pt-[132px] pb-[102px]">
      <Container>
        <p className="w-[236px] mb-[100px] text-base">
          {t("notFounDescription")}
        </p>
        <NotFoundImage />
      </Container>
      <MarqueeLine />
    </section>
  );
}

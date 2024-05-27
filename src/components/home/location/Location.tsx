import { useTranslations } from "next-intl";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import LocationList from "./LocationList";
import SectionHexagonBgImage from "../../shared/SectionHexagonBgImage";
import Map from "./Map";
import TextButton from "../../shared/buttons/TextButton";

const MAP_URL = "https://maps.app.goo.gl/XdyPTk5aaQVUhvH78";

export default function Location() {
  const t = useTranslations("");

  return (
    <section className="relative z-10 pt-20 tablet:pt-10 mb-10 scroll-mt-[72px]">
      <SectionHexagonBgImage />
      <SectionTitle className="w-1/2 mx-auto">
        {t("Location.title")}
      </SectionTitle>
      <div className="flex flex-col tablet:flex-row items-center justify-between">
        <Container>
          <p className="mb-5 text-base">{t("Location.description")}</p>
          <LocationList />
          <a
            href={MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center mb-5 tablet:mb-0 outline-none"
          >
            <TextButton>{t("Buttons.route")}</TextButton>
          </a>
        </Container>
        <Map />
      </div>
    </section>
  );
}

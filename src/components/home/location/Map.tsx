import { useTranslations } from "next-intl";
import Image from "next/image";
import TextButton from "../../shared/TextButton";
import Container from "../../shared/Container";

const MAP_URL = "https://maps.app.goo.gl/XdyPTk5aaQVUhvH78";

export default function Map() {
  const t = useTranslations("Buttons");

  return (
    <>
      <Container className="flex justify-center">
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="outline-none"
        >
          <TextButton className="mb-5">{t("route")}</TextButton>{" "}
        </a>
      </Container>
      <div className="relative max-w-[560px] mx-auto">
        <Image
          src={`/images/googleMap.jpg`}
          width="0"
          height="0"
          sizes="100%"
          alt="map"
          className="w-full h-auto"
        />
        <Image
          src={`/images/icons/logoDark.svg`}
          width="0"
          height="0"
          sizes="100%"
          alt="location icon"
          className="absolute top-[28%] left-[14%] w-[33.3%] h-auto"
        />
        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="outline-none"
        >
          <Image
            src={`/images/icons/locationLarge.svg`}
            width="0"
            height="0"
            sizes="100%"
            alt="location icon"
            className="absolute top-[42%] right-[42%] w-[19%] h-auto"
          />
        </a>
      </div>
    </>
  );
}

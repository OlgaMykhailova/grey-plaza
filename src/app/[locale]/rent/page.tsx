import Hero from "@/src/components/rent/hero/Hero";
import OfficesCategoriesSection from "@/src/components/rent/OfficesCategoriesSection/OfficesCategoriesSection";
import WriteUs from "@/src/components/shared/writeUs/WriteUs";
import { generatePageMetaData } from "@/src/utils/generatePageMetaData";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  return generatePageMetaData({
    locale,
    namespace: "Metadata",
    canonical: "/rent",
  });
}

export default function Offices() {
  return (
    <div className="pt-[72px]">
      <Hero />
      <OfficesCategoriesSection />
      <WriteUs id={"rent-write-us"} />
    </div>
  );
}

"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import FilterButton from "../../shared/buttons/FilterButton";

export default function FilterButtonsList() {
  const t = useTranslations("Rent");
  const filtersList = [
    { title: t("category1000") },
    { title: t("category500") },
    { title: t("category300") },
    { title: t("category200") },
    { title: t("category100") },
    { title: t("categoryLess100") },
  ];
  const [currentCategory, setCurrentCategory] = useState(t("category1000"));

  return (
    <ul className="flex flex-wrap gap-x-[13.1%] gap-y-4">
      {filtersList.map(({ title }, idx) => (
        <FilterButton
          key={idx}
          className="w-[42.2%]"
          handleCLick={() => setCurrentCategory(title)}
          currentCategory={currentCategory}
        >
          {title}
        </FilterButton>
      ))}
    </ul>
  );
}

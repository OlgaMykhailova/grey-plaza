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
    <ul className="flex flex-wrap laptop:flex-nowrap laptop:justify-between gap-x-[13.1%] tablet:gap-x-[5%] laptop:gap-0 gap-y-4 w-full mx-auto">
      {filtersList.map(({ title }, idx) => (
        <li key={idx} className="w-[42.2%] tablet:w-[30%] laptop:w-[15.25%]">
          <FilterButton
            handleCLick={() => setCurrentCategory(title)}
            currentCategory={currentCategory}
          >
            {title}
          </FilterButton>
        </li>
      ))}
    </ul>
  );
}

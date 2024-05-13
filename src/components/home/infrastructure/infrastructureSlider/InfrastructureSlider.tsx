"use client";
import { useTranslations } from "next-intl";
import { SwiperSlide } from "swiper/react";
import SliderWrapper from "./SliderWrapper";
import SlideWrapper from "../../../shared/slider/SlideWrapper";
import InfrastructureSliderCard from "./InfrastructureSliderCard";

export default function InfrastructureSlider() {
  const t = useTranslations("Infrastructure");

  const infrastructureList = [
    {
      image: "greenZone.jpg",
      alt: "Rest Zone",
      title: t("restZoneTitle"),
      description: t("restZoneDescription"),
    },
    {
      image: "sportSimulators.jpg",
      alt: "Sport Simulators",
      title: t("sportSimulatorsTitle"),
      description: t("sportSimulatorsDescription"),
    },
    {
      image: "cafe.jpg",
      alt: "Cafe",
      title: t("cafeTitle"),
      description: t("cafeDescription"),
    },
    {
      image: "parking.jpg",
      alt: "Parking",
      title: t("parkingTitle"),
      description: t("parkingDescription"),
    },
    {
      image: "warehouses.jpg",
      alt: "Warehouses",
      title: t("warehousesTitle"),
      description: t("warehousesDescription"),
    },
    {
      image: "atm.jpg",
      alt: "ATM",
      title: t("atmTitle"),
      description: t("atmDescription"),
    },
    {
      image: "post.jpg",
      alt: "Post",
      title: t("postTitle"),
      description: t("postDescription"),
    },
  ];

  return (
    <SliderWrapper>
      {infrastructureList.map((infrastructureItem, idx) => (
        <SwiperSlide key={idx}>
          <SlideWrapper>
            <InfrastructureSliderCard infrastructureItem={infrastructureItem} />
          </SlideWrapper>
        </SwiperSlide>
      ))}
    </SliderWrapper>
  );
}

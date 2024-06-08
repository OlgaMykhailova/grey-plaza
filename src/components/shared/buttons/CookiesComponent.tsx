"use client";
import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";

export default function CookiesComponent() {
  const [isAccepted, setIsAccepted] = useState(true);
  const cookiesValue = Cookies.get("isAcceptedCookies");
  const cookiesRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Cookies");

  return <div>CookiesComponent</div>;
}

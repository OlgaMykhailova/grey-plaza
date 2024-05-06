"use client";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Field, Form, Formik, ErrorMessage } from "formik";
import MaskedInput from "react-text-mask";
import Link from "next/link";
import Button from "../Button";
import { WriteUsValidation } from "@/src/schemas/writeUsFormValidation";

export default function WriteUsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale();
  const t = useTranslations("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = WriteUsValidation();

  const phoneNumberMask = [
    "+",
    "3",
    "8",
    " ",
    "(",
    "0",
    /[0-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];

  const labelStyles = "relative w-full h-12 px-4 py-3 bg-white-bg";
  const textLabelStyles =
    "absolute left-4 transition-translate duration-300 ease-out-quart text-grey bg-white-bg";
  const fieldStyles = "outline-none w-full h-full text-black bg-white-bg";
  const teaxtAreaLabelStyles = "relative w-full h-[116px] p-4 bg-white-bg";
  const textAreaStyles =
    "outline-none w-full h-full resize-none text-black bg-white-bg";
  const errorStyles =
    "absolute bottom-[-16px] right-0 text-2xs text-error-text";

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, status, setStatus }) => (
        <Form className="flex flex-col items-center gap-y-7 h-full text-base ">
          <label
            className={`${labelStyles} ${
              errors.name && touched.name
                ? "border-[1px] border-error-input"
                : ""
            }`}
          >
            <p
              className={`${textLabelStyles} ${
                values.name || status === "name"
                  ? "top-[-8px] px-1.5 text-xs"
                  : "top-[14px] text-base"
              }`}
            >
              {t("WriteUs.name")}
            </p>
            <Field
              name="name"
              type="text"
              autoComplete="on"
              placeholder={
                status === "name" ? t("WriteUs.namePlaceholder") : ""
              }
              onFocus={() => setStatus("name")}
              className={`${fieldStyles} ${
                errors.name && touched.name ? "text-error-input" : ""
              }`}
            ></Field>
            <ErrorMessage
              name="name"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>
          <label
            className={`${labelStyles} ${
              errors.email && touched.email
                ? "border-[1px] border-error-input"
                : ""
            }`}
          >
            <p
              className={`${textLabelStyles} ${
                values.email || status === "email"
                  ? "top-[-8px] px-1.5 text-xs"
                  : "top-[14px] text-base"
              }`}
            >
              {t("WriteUs.email")}
            </p>
            <Field
              name="email"
              type="email"
              autoComplete="on"
              placeholder={
                status === "email" ? t("WriteUs.emailPlaceholder") : ""
              }
              onFocus={() => setStatus("email")}
              className={`${fieldStyles} ${
                errors.email && touched.email ? "text-error-input" : ""
              }`}
            ></Field>
            <ErrorMessage
              name="email"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>
          <label
            className={`${labelStyles} ${
              errors.phone && touched.phone
                ? "border-[1px] border-error-input"
                : ""
            }`}
          >
            <p
              className={`${textLabelStyles} ${
                values.phone || status === "phone"
                  ? "top-[-8px] px-1.5 text-xs"
                  : "top-[14px] text-base"
              }`}
            >
              {t("WriteUs.phone")}
            </p>
            <Field
              as={MaskedInput}
              mask={phoneNumberMask}
              name="phone"
              type="text"
              autoComplete="on"
              placeholder={
                status === "phone" ? t("WriteUs.phonePlaceholder") : ""
              }
              onFocus={() => setStatus("phone")}
              className={`${fieldStyles} ${
                errors.phone && touched.phone ? "text-error-input" : ""
              }`}
            ></Field>
            <ErrorMessage
              name="phone"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>
          <label
            className={`${teaxtAreaLabelStyles} ${
              errors.message && touched.message
                ? "border-[1px] border-error-input"
                : ""
            }`}
          >
            <p
              className={`${textLabelStyles} ${
                values.message || status === "message"
                  ? "top-[-8px] px-1.5 text-xs"
                  : "top-[16px] left-0 text-base"
              }`}
            >
              {t("WriteUs.message")}
            </p>
            <Field
              as="textarea"
              name="message"
              type="text"
              autoComplete="on"
              placeholder={
                status === "message" ? t("WriteUs.messagePlaceholder") : ""
              }
              onFocus={() => setStatus("message")}
              className={`${textAreaStyles} ${
                errors.message && touched.message ? "text-error-input" : ""
              }`}
            ></Field>
            <ErrorMessage
              name="message"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>
          <div className="text-xs text-white-text ">
            <div className="flex gap-x-2 w-full mb-1.5">
              <span>*</span>
              <p>{t("WriteUs.requiredFields")}</p>
            </div>
            <p>
              {t("WriteUs.agreement")}
              <Link
                href={`/${locale}/policy`}
                className="outline-none  border-b-[1px] border-white-text laptop:hover:text-accent laptop:focus-visible:text-accent 
            laptop:hover:border-accent laptop:focus-visible:border-accent transition-[color] duration-[300ms] ease-out-quart"
              >
                {t("WriteUs.policy")}
              </Link>
            </p>
          </div>
          <Button type="submit">{t("Buttons.send")}</Button>
        </Form>
      )}
    </Formik>
  );
}

"use client";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Field, Form, Formik, ErrorMessage } from "formik";
import Link from "next/link";
import Button from "../Button";

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

  const labelStyles = "relative w-full h-12";
  const textLabelStyles =
    "absolute left-4 transition-translate duration-300 ease-out-quart text-grey bg-white-bg";
  const fieldStyles =
    "outline-none w-full h-full py-2 px-4 text-black bg-white-bg";
  const teaxtAreaLabelStyles = "relative w-full h-[116px]";
  const textAreaStyles =
    "outline-none w-full h-full p-4 resize-none text-black bg-white-bg";

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, status, setStatus }) => (
        <Form className="flex flex-col items-center gap-y-7 text-base ">
          <label className={`${labelStyles}`}>
            <p
              className={`${textLabelStyles} ${
                values.name || status === "name"
                  ? "top-[-10px] px-1.5 text-xs"
                  : "top-[14px] text-base"
              }`}
            >
              {t("WriteUs.name")}
            </p>
            <Field
              name="name"
              type="text"
              autoComplete="on"
              onFocus={() => setStatus("name")}
              className={`${fieldStyles}`}
            ></Field>
            <ErrorMessage name="name" component="p" className=""></ErrorMessage>
          </label>
          <label className={`${labelStyles}`}>
            <p
              className={`${textLabelStyles} ${
                values.email || status === "email"
                  ? "top-[-10px] px-1.5 text-xs"
                  : "top-[14px] text-base"
              }`}
            >
              {t("WriteUs.email")}
            </p>
            <Field
              name="email"
              type="email"
              autoComplete="on"
              onFocus={() => setStatus("email")}
              className={`${fieldStyles}`}
            ></Field>
            <ErrorMessage
              name="email"
              component="p"
              className=""
            ></ErrorMessage>
          </label>
          <label className={`${labelStyles}`}>
            <p
              className={`${textLabelStyles} ${
                values.phone || status === "phone"
                  ? "top-[-10px] px-1.5 text-xs"
                  : "top-[14px] text-base"
              }`}
            >
              {t("WriteUs.phone")}
            </p>
            <Field
              name="phone"
              type="text"
              autoComplete="on"
              onFocus={() => setStatus("phone")}
              className={`${fieldStyles}`}
            ></Field>
            <ErrorMessage
              name="phone"
              component="p"
              className=""
            ></ErrorMessage>
          </label>
          <label className={`${teaxtAreaLabelStyles}`}>
            <p
              className={`${textLabelStyles} ${
                values.message || status === "message"
                  ? "top-[-10px] px-1.5 text-xs"
                  : "top-[14px] text-base"
              }`}
            >
              {t("WriteUs.message")}
            </p>
            <Field
              as="textarea"
              name="message"
              type="text"
              autoComplete="on"
              onFocus={() => setStatus("message")}
              className={`${textAreaStyles}`}
            ></Field>
            <ErrorMessage
              name="message"
              component="p"
              className=""
            ></ErrorMessage>
          </label>
          <div className="flex gap-x-2 mb-1 text-white-text">
            <span>*</span>
            <p>
              {t("WriteUs.agreement")}
              <Link
                href={`/${locale}/policy`}
                className="outline-none border-b-[1px] border-white-text laptop:hover:text-accent laptop:focus-visible:text-accent 
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

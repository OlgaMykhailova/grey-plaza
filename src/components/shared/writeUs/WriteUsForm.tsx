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
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="flex flex-col items-center gap-y-7">
        <label className={``}>
          <p className={``}></p>
          <Field
            name="name"
            type="text"
            autoComplete="on"
            placeholder=""
            className={``}
          ></Field>
          <ErrorMessage name="name" component="p" className=""></ErrorMessage>
        </label>
        <label className={``}>
          <p className={``}></p>
          <Field
            name="email"
            type="email"
            autoComplete="on"
            placeholder=""
            className={``}
          ></Field>
          <ErrorMessage name="email" component="p" className=""></ErrorMessage>
        </label>
        <label className={``}>
          <p className={``}></p>
          <Field
            name="phone"
            type="text"
            autoComplete="on"
            placeholder=""
            className={``}
          ></Field>
          <ErrorMessage name="phone" component="p" className=""></ErrorMessage>
        </label>
        <label className={``}>
          <p className={``}></p>
          <Field
            as="textarea"
            name="message"
            type="text"
            autoComplete="on"
            placeholder=""
            className={``}
          ></Field>
          <ErrorMessage
            name="message"
            component="p"
            className=""
          ></ErrorMessage>
        </label>
        <div className="flex gap-x-2 mb-1 text-base text-white-text">
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
    </Formik>
  );
}

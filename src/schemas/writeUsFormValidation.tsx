import * as yup from "yup";
import { useTranslations } from "next-intl";

const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇґҐєЄ\s'"-]+$/;

const emailRegex =
  /^([a-zA-Z0-9]+)([a-zA-Z0-9?'"`#$%&*+_./|^{}~]+)?@([a-zA-Z0-9_\-.]+)([.][a-zA-Z]{2,3})$/;

const phoneRegex = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

export const WriteUsValidation = () => {
  const t = useTranslations("Errors");

  const writeUsFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t("nameMinMaxSymbols"))
      .max(30, t("nameMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols"))
      .required(t("required")),
    email: yup
      .string()
      .matches(emailRegex, t("wrongEmail"))
      .required(t("required")),
    phone: yup.string().matches(phoneRegex, t("wrongPhone")),
    message: yup
      .string()
      .min(10, t("messageMinMaxSymbols"))
      .max(200, t("messageMinMaxSymbols")),
  });

  return writeUsFormValidationSchema;
};

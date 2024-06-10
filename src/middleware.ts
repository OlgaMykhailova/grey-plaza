import createMiddleware from "next-intl/middleware";
import { locales } from "./config";
import { localePrefix } from "./config";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  localePrefix: localePrefix,
  // Used when no locale matches
  defaultLocale: "uk",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

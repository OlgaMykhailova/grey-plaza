import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1280px",
      },
      fontSize: {
        xs: [
          "14px",
          {
            lineHeight: "18px",
            fontWeight: "400",
          },
        ],
        xsb: [
          "14px",
          {
            lineHeight: "18px",
            fontWeight: "700",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "21px",
            fontWeight: "400",
          },
        ],
        baseb: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        mdb: [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],
        lgb: [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "700",
          },
        ],
        xlsb: [
          "28px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
        xxlb: [
          "44px",
          {
            lineHeight: "48px",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        black: "#080000",
        primary: "#042C4A",
        accent: "#F23E02",
        grey: "#444444",
        white: { bg: "#F6F6F6", text: "#FFFFFF" },
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to bottom, #878686 0%, #597286 66%, #042C4A 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

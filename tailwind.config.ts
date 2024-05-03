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
        mobileXl: "560px",
        tablet: "768px",
        laptop: "1280px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
      },
      fontFamily: {
        fira: ["var(--font-fira)"],
      },
      fontSize: {
        "3xs": [
          "10px",
          {
            lineHeight: "12px",
            fontWeight: "400",
          },
        ],
        "2xs": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
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
        primary: "#042C4A",
        secondary: "#ACC8E5",
        accent: "#F23E02",
        black: "#080000",
        disabled: "#8B8B8B",
        grey: "#444444",
        white: { bg: "#F6F6F6", text: "#FFFFFF" },
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to bottom, #878686 0%, #597286 66%, #042C4A 100%)",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "ButtonImage": "url('/images/buttonBg.svg')",
        "BodyImage": "url('/images/bodyBg.svg')",
        "headeangImage": "url('/images/headingLine.svg')",
        "swiperBtnPrev": "url('/icons/swiperButtonPrev.svg')",
        "swiperBtnNext": "url('/icons/swiperButtonNext.svg')"

      },
      colors: {
        primary: "#820000",
        secondary: "#4E6C50",
        tertiary: "#F2DEBA",
        quaternary: "#FAFAFA",
        quinary: "#212121"
      },
      fontSize: {
        "2.5xl": '1.75rem',
        "4.5xl": '2.5rem',
      },
      fontFamily: {
        "GEO703": ['GEO703'],
        'IranYekan': ['IRANYekan', "sans-serif"],
      },
      boxShadow: {
        primary: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      }
    },
  },

  plugins: [nextui()]
}
export default config

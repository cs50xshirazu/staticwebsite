import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

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
      }
    },
  },

  plugins: []
}
export default config

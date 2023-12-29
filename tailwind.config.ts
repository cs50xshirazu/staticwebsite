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
      },
      colors: {
        primary: "#820000",
        secondary: "#4E6C50",
        tertiary: "#F2DEBA",
        quaternary: "#FFFBF7",
        quinary: "#212121"
      }
    },
  },
  plugins: []
}
export default config

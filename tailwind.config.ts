import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            screens: {
                "3xs": "320px",
                "2xs": "420px",
                "xs": "480px"
            },
            fontFamily: {
                "iran-yekan-x": ["var(--font-iran-yekan-x)"],
                "geo-slab-703": ["var(--font-geo-slab-703)"]
            },
            backgroundImage: {
                "main-pattern": "url('/images/bg-pattern.webp')"
            },
            container: {
                center: true,
                screens: {
                    "2xl": "1280px"
                },
                padding: {
                    // DEFAULT: "30px",
                    DEFAULT: "18px",
                }
            },
            colors: {
                primary: {
                    DEFAULT: "hsl(var(--color-primary) / <alpha-value>)"
                },
                "brand-green": {
                    DEFAULT: "hsl(var(--color-brand-green) / <alpha-value>)"
                },
                "brand-white": {
                    DEFAULT: "hsl(var(--color-brand-white) / <alpha-value>)"
                },
                "brand-cream": {
                    DEFAULT: "hsl(var(--color-brand-cream) / <alpha-value>)"
                }
            }
        }
    },
    plugins: [
        plugin(function({ addUtilities }) {
            addUtilities({
                ".persian-number": {
                    "-moz-font-feature-settings": "ss02",
                    "-webkit-font-feature-settings": "ss02",
                    "font-feature-settings": "ss02"
                },
                ".flex-center": {
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center"
                },
                ".flex-col-center": {
                    display: "flex",
                    "flex-direction": "column",
                    "justify-content": "center",
                    "align-items": "center"
                }
            });
        })
    ]
};
export default config;

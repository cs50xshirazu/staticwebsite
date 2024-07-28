import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/primereact/**/*.{js,ts,jsx,tsx}"
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
            borderRadius: {
                "prime-radius": "var(--border-radius)"
            },
            container: {
                center: true,
                screens: {
                    "2xl": "1280px"
                },
                padding: {
                    // DEFAULT: "30px",
                    DEFAULT: "18px"
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
                },
                "prime": {
                    "mask-bg": "var(--mask-bg)",
                    "focus-ring": "var(--focus-ring)",
                    "highlight": {
                        bg: "var(--highlight-bg)",
                        text: "var(--highlight-text-color)"
                    },
                    "text": {
                        DEFAULT: "var(--text-color)",
                        secondary: "var(--text-color-secondary)"
                    },
                    "primary": {
                        DEFAULT: "var(--primary-color)",
                        text: "var(--primary-color-text)"
                    },
                    "surface": {
                        0: "var(--surface-0)",
                        50: "var(--surface-50)",
                        100: "var(--surface-100)",
                        200: "var(--surface-200)",
                        300: "var(--surface-300)",
                        400: "var(--surface-400)",
                        500: "var(--surface-500)",
                        600: "var(--surface-600)",
                        700: "var(--surface-700)",
                        800: "var(--surface-800)",
                        900: "var(--surface-900)",
                        ground: "var(--surface-ground)",
                        section: "var(--surface-section)",
                        card: "var(--surface-card)",
                        overlay: "var(--surface-overlay)",
                        border: "var(--surface-border)",
                        hover: "var(--surface-hover)"
                    }
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

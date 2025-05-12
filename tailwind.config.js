import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        "title-2xl": ["72px", "90px"],
        "title-xl": ["60px", "72px"],
        "title-lg": ["48px", "60px"],
        "title-md": ["36px", "44px"],
        "title-sm": ["30px", "38px"],
        "theme-xl": ["20px", "30px"],
        "theme-sm": ["14px", "20px"],
        "theme-xs": ["12px", "18px"],
      },
      colors: {
  current: "currentColor",
  transparent: "transparent",
  white: "#FFFFFF",
  black: "#121212", // updated to match title text color
brand: {
  25: "#E5EFF9",
  50: "#BFD6F0",
  100: "#95B7E6",
  200: "#6B97DC",
  300: "#4077D1",
  400: "#265DC2",
  500: "#0F51A7", // base color
  600: "#0D468F",
  700: "#0B3A78",
  800: "#083061",
  900: "#06254B",
  950: "#03152E",
},

  "blue-light": {
    25: "#F5FAFC",
    50: "#E6F6FA",
    100: "#BDECF6",
    200: "#84DFF0",
    300: "#4BD3EB",
    400: "#28B4D3", // button color (Learn more)
    500: "#1C8FA5",
    600: "#157787",
    700: "#0E5F69",
    800: "#08474B",
    900: "#042F2D",
    950: "#021819",
  },
  gray: {
    25: "#FCFCFD",
    50: "#F9FAFB",
    100: "#F2F4F7",
    200: "#E4E7EC",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
    600: "#475467",
    700: "#344054",
    800: "#1D2939",
    900: "#101828",
    950: "#0C111D",
    dark: "#1A2231",
  },
  orange: {
    25: "#FFFAF5",
    50: "#FFF6ED",
    100: "#FFEAD5",
    200: "#FDDCAB",
    300: "#FEB273",
    400: "#FD853A",
    500: "#FB6514",
    600: "#EC4A0A",
    700: "#C4320A",
    800: "#9C2A10",
    900: "#7E2410",
    950: "#511C10",
  },
  success: {
    25: "#F3FCF7",
    50: "#D1F5E2",
    100: "#A8EDCC",
    200: "#7EE6B6",
    300: "#54DEA0",
    400: "#2BD78A",
    500: "#12B76A",
    600: "#0E9C58",
    700: "#0A8047",
    800: "#076536",
    900: "#054A25",
    950: "#032F17",
  },
  error: {
    25: "#FFF5F5",
    50: "#FFECEC",
    100: "#FFD6D6",
    200: "#FFADAD",
    300: "#FF8585",
    400: "#FF5C5C",
    500: "#E53935", // red from heading
    600: "#D32F2F",
    700: "#B71C1C",
    800: "#991616",
    900: "#7B1111",
    950: "#4C0909",
  },
  warning: {
    25: "#FFFCF5",
    50: "#FFFAEB",
    100: "#FEF0C7",
    200: "#FEDF89",
    300: "#FEC84B",
    400: "#FDB022",
    500: "#F79009",
    600: "#DC6803",
    700: "#B54708",
    800: "#93370D",
    900: "#7A2E0E",
    950: "#4E1D09",
  },
  "theme-pink": {
    500: "#EE46BC",
  },
  "theme-purple": {
    500: "#A259FF", // From the circular accent
  },
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  card: {
    DEFAULT: "hsl(var(--card))",
    foreground: "hsl(var(--card-foreground))",
  },
  popover: {
    DEFAULT: "hsl(var(--popover))",
    foreground: "hsl(var(--popover-foreground))",
  },
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  secondary: {
    DEFAULT: "hsl(var(--secondary))",
    foreground: "hsl(var(--secondary-foreground))",
  },
  muted: {
    DEFAULT: "hsl(var(--muted))",
    foreground: "hsl(var(--muted-foreground))",
  },
  accent: {
    DEFAULT: "hsl(var(--accent))",
    foreground: "hsl(var(--accent-foreground))",
  },
  destructive: {
    DEFAULT: "hsl(var(--destructive))",
    foreground: "hsl(var(--destructive-foreground))",
  },
  border: "hsl(var(--border))",
  input: "hsl(var(--input))",
  ring: "hsl(var(--ring))",
  chart: {
    1: "hsl(var(--chart-1))",
    2: "hsl(var(--chart-2))",
    3: "hsl(var(--chart-3))",
    4: "hsl(var(--chart-4))",
    5: "hsl(var(--chart-5))",
  },
},

      boxShadow: {
        "theme-md":
          "0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
        "theme-lg":
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        "theme-sm":
          "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        "theme-xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        "theme-xl":
          "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
        datepicker: "-5px 0 0 #262d3c, 5px 0 0 #262d3c",
        "focus-ring": "0px 0px 0px 4px rgba(70, 95, 255, 0.12)",
        "slider-navigation":
          "0px 1px 2px 0px rgba(16, 24, 40, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
        tooltip:
          "0px 4px 6px -2px rgba(16, 24, 40, 0.05), -8px 0px 20px 8px rgba(16, 24, 40, 0.05)",
      },
      dropShadow: {
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      zIndex: {
        1: "1",
        9: "9",
        99: "99",
        999: "999",
        9999: "9999",
        99999: "99999",
        999999: "999999",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        10.5: "2.625rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        13.5: "3.375rem",
        14.5: "3.625rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    import("@tailwindcss/forms"),
    import("autoprefixer"),
    require("tailwindcss-animate"),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // 다크 모드 설정 유지
  content: [
    "./src/**/*.{html,js,jsx}", // 첫 번째 설정의 파일 경로
    "app/**/*.{ts,tsx}", // 두 번째 설정의 파일 경로
    "components/**/*.{ts,tsx}", // 두 번째 설정의 파일 경로
  ],
  theme: {
    extend: {
      fontFamily: {
        blackhans: ["Black Han Sans", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#f0f2f5",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#ff813f",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: "#222222",
        slate: {
          10: "#f1f3f4",
        },
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {},
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // 두 번째 설정에서 가져온 플러그인
  ],
};

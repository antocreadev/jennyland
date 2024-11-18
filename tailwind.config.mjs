/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "jennyland-color-brown": "#6d454c",
        "jennyland-color-green": "#9BC1BC",
        "jennyland-color-red": "#CB958E",
        "jennyland-color-white": "#e6ebe0",
        "jennyland-color-black": "#272d2d",
      },
    },
  },
  plugins: [],
};

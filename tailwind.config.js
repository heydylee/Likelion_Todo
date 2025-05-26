import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],  // 필요하면 js, jsx도 포함
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};

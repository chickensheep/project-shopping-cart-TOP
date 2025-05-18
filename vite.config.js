import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	base: "/project-shopping-cart-TOP/",
	plugins: [react()],
});

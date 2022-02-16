import { ViteSSG } from "vite-ssg";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import App from "@/App.vue";
import "destyle.css";
import "@/assets/styles/global.scss";

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  //
});

import { defineConfig } from "blogkit";
import { request } from "blogkit-notion";
import { theme } from "blogkit-theme-minimal";

export default defineConfig({
  siteConfig: {
    title: "/blog",
    author: "Cem Turan",
    url: "https://ce.ms",
  },
  theme,
  request,
});

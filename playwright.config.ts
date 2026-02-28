import { defineConfig } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "./tests",
  retries: 1,
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: "on",
    video: "on",
    trace: "on"
  },
  reporter: [["html", { open: "never" }]]
});
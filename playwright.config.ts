import { existsSync } from "fs";

import { defineConfig, devices } from "@playwright/test";

// This sandbox pre-installs Chromium outside Playwright's usual cache; CI
// installs it normally, so only override the path when that sandbox path exists.
const sandboxChromium = "/opt/pw-browsers/chromium";
const chromiumExecutablePath =
  process.env.PLAYWRIGHT_CHROMIUM_PATH || (existsSync(sandboxChromium) ? sandboxChromium : undefined);

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: chromiumExecutablePath ? { executablePath: chromiumExecutablePath } : {},
      },
    },
  ],
  webServer: {
    command: "pnpm build && pnpm start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
});

import { expect, test } from "@playwright/test";

import { publicRoutes } from "./routes";

const forbiddenPhrases = [/best in malaysia/i, /any use case/i];

for (const route of publicRoutes) {
  test(`tone: ${route} contains no forbidden claims`, async ({ page }) => {
    await page.goto(route, { waitUntil: "networkidle" });
    const text = await page.locator("body").innerText();
    for (const phrase of forbiddenPhrases) {
      expect(text, `found forbidden phrase ${phrase} on ${route}`).not.toMatch(phrase);
    }
  });
}

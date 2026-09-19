import { expect, test } from "@playwright/test";

import { publicRoutes } from "./routes";

const widths = [360, 390, 768, 1024, 1280, 1440];

for (const width of widths) {
  test.describe(`viewport ${width}px`, () => {
    test.use({ viewport: { width, height: 900 } });

    for (const route of publicRoutes) {
      test(`${route}: no horizontal overflow`, async ({ page }) => {
        await page.goto(route, { waitUntil: "networkidle" });
        const { scrollWidth, clientWidth } = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
        }));
        // A small tolerance absorbs scrollbar-gutter rounding; real overflow bugs are much larger than this.
        expect(scrollWidth, `${route} at ${width}px overflows horizontally`).toBeLessThanOrEqual(
          clientWidth + 16,
        );
      });
    }
  });
}

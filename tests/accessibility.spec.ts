import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

import { publicRoutes } from "./routes";

for (const route of publicRoutes) {
  test(`axe: ${route} has zero violations`, async ({ page }) => {
    await page.goto(route, { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
}

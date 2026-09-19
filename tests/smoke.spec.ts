import { expect, test } from "@playwright/test";

import { publicRoutes } from "./routes";

for (const route of publicRoutes) {
  test(`smoke: ${route} loads with no console errors and a heading`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));

    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1, h2").first()).toBeVisible();
    expect(errors, `console/page errors on ${route}: ${errors.join(" | ")}`).toHaveLength(0);
  });
}

test("404: unknown route returns 404 with the right copy", async ({ page }) => {
  const response = await page.goto("/this-route-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByText("Wrong turn.")).toBeVisible();
});

test("draft content 404s in production", async ({ page }) => {
  const caseStudy = await page.goto("/work/example-first-phase");
  expect(caseStudy?.status()).toBe(404);

  const article = await page.goto("/insights/what-a-scaffold-is-and-isnt");
  expect(article?.status()).toBe(404);
});

test("design-system route 404s in production", async ({ page }) => {
  const response = await page.goto("/design-system");
  expect(response?.status()).toBe(404);
});

import { expect, test } from "@playwright/test";

test("FAQ accordion: first item open by default, others closed, toggles on click", async ({ page }) => {
  await page.goto("/");
  const items = page.locator("details");
  await expect(items).toHaveCount(5);

  expect(await items.nth(0).evaluate((el: HTMLDetailsElement) => el.open)).toBe(true);
  expect(await items.nth(1).evaluate((el: HTMLDetailsElement) => el.open)).toBe(false);

  await items.nth(1).locator("summary").click();
  expect(await items.nth(1).evaluate((el: HTMLDetailsElement) => el.open)).toBe(true);
});

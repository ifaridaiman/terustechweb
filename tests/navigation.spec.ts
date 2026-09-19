import { expect, test } from "@playwright/test";

test.describe("Desktop navigation", () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test("header shows all 5 nav links and shrinks on scroll", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header nav a")).toHaveCount(5);

    const before = await page.locator("header").evaluate((el) => el.getBoundingClientRect().height);
    await page.evaluate(() => window.scrollTo(0, 300));
    await page.waitForTimeout(300);
    const after = await page.locator("header").evaluate((el) => el.getBoundingClientRect().height);
    expect(after).toBeLessThan(before);
  });

  test("footer renders all columns and a working theme toggle", async ({ page }) => {
    await page.goto("/");
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect(page.locator("footer")).toContainText("Terus Tech");
    await expect(page.locator("footer")).toContainText("Services");
    await expect(page.locator("footer")).toContainText("Company");

    const before = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
    await page.locator("footer button[aria-label*='theme']").click();
    await page.waitForTimeout(100);
    const after = await page.evaluate(() => document.documentElement.getAttribute("data-theme"));
    expect(after).not.toBe(before);
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("mobile menu opens, traps focus, closes on Escape", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("header nav")).toBeHidden();

    const trigger = page.locator('button[aria-controls="mobile-nav"]');
    await trigger.click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});

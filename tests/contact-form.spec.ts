import { expect, test } from "@playwright/test";

test.describe("Contact form", () => {
  test("required-field validation on submit, focus moves to first invalid field", async ({ page }) => {
    await page.goto("/contact");
    await page.locator("button[type=submit]").click();
    await expect(page.locator("#name-error")).toContainText("We need this one to reply.");
    await expect(page.locator("#name")).toBeFocused();
  });

  test("blur validation shows the invalid-email message", async ({ page }) => {
    await page.goto("/contact");
    await page.locator("#email").fill("not-an-email");
    await page.locator("#email").blur();
    await expect(page.locator("#email-error")).toContainText("doesn't look right");
  });

  test("valid submission shows the success message", async ({ page }) => {
    await page.goto("/contact");
    await page.locator("#name").fill("Test User");
    await page.locator("#email").fill("test@example.com");
    await page.locator("#message").fill("We are exploring a new booking platform.");
    await page.locator("#timeline").selectOption("Right away");
    await page.locator("button[type=submit]").click();
    await expect(page.getByText("Sent!")).toBeVisible();
  });

  test("honeypot: filling the hidden field still resolves to success (silent no-op)", async ({ page }) => {
    await page.goto("/contact");
    await page.locator("#name").fill("Bot");
    await page.locator("#email").fill("bot@example.com");
    await page.locator("#message").fill("spam message");
    await page.locator("#timeline").selectOption("Right away");
    await page.evaluate(() => {
      const el = document.getElementById("website") as HTMLInputElement | null;
      if (el) el.value = "http://spam.example";
    });
    await page.locator("button[type=submit]").click();
    await expect(page.getByText("Sent!")).toBeVisible();
  });

  test("text is not lost after a validation error", async ({ page }) => {
    await page.goto("/contact");
    await page.locator("#name").fill("Test User");
    await page.locator("#message").fill("A message that should survive the round trip.");
    // Leave email empty and timeline unselected to trigger a server-side error.
    await page.locator("button[type=submit]").click();
    await expect(page.locator("#name")).toHaveValue("Test User");
    await expect(page.locator("#message")).toHaveValue("A message that should survive the round trip.");
  });
});

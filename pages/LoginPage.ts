import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("/login", { waitUntil: "domcontentloaded" });
  }

  async login(username: string, password: string) {
    const userInput = this.page.locator(
      'input[name="username"], input[name="email"], input[type="text"]'
    ).first();
    await this.page.waitForTimeout(1000);

    const passInput = this.page.locator(
      'input[name="password"], input[type="password"]'
    ).first();

    await expect(userInput).toBeVisible({ timeout: 15000 });
    await userInput.fill(username);

    await expect(passInput).toBeVisible({ timeout: 15000 });
    await passInput.fill(password);

    const submitBtn = this.page.locator(
      'button[type="submit"], input[type="submit"], button:has-text("Login"), a:has-text("Login")'
    ).first();

    await submitBtn.click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}
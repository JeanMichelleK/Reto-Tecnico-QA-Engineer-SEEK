import { Page, expect } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async assertLoggedIn() {
    await expect(this.page).not.toHaveURL(/\/login/i, { timeout: 15000 });


    const sidebar = this.page.locator(".ossn-system-menu").first();
    const newsFeedLink = this.page.getByRole("link", { name: /news feed/i }).first();
    const messagesLink = this.page.getByRole("link", { name: /messages/i }).first();
    const wallForm = this.page.locator("form#ossn-wall-form").first();


    if (await wallForm.count()) {
      await expect(wallForm).toBeVisible({ timeout: 15000 });
      return;
    }

    if (await sidebar.count()) {
      await expect(sidebar).toBeVisible({ timeout: 15000 });
      return;
    }

    if (await newsFeedLink.count()) {
      await expect(newsFeedLink).toBeVisible({ timeout: 15000 });
      return;
    }

    await expect(messagesLink).toBeVisible({ timeout: 15000 });
  }

  async createPostWithImage(caption: string, imagePath: string) {
  const wallForm = this.page.locator("form#ossn-wall-form").first();
  await expect(wallForm).toBeVisible({ timeout: 20000 });

  const textarea = wallForm.locator("textarea").first();
  await expect(textarea).toBeVisible({ timeout: 20000 });
  await textarea.fill(caption);

  // OSSN suele usar input file oculto dentro del form
  const fileInputs = wallForm.locator('input[type="file"]');
  const count = await fileInputs.count();
  expect(count).toBeGreaterThan(0);

  // usamos el primero visible, si ninguno visible igual intentamos setInputFiles
  const fileInput = fileInputs.first();
  await fileInput.setInputFiles(imagePath);

  // Click Post (según tu UI se ve botón "Post")
  const postBtn = wallForm.getByRole("button", { name: /^post$/i });
  if (await postBtn.count()) {
    await postBtn.click();
  } else {
    await wallForm.locator('input[type="submit"], button[type="submit"]').first().click();
  }

  // Espera a que aparezca el post en feed
  await expect(this.page.getByText(caption).first()).toBeVisible({ timeout: 20000 });
}
}
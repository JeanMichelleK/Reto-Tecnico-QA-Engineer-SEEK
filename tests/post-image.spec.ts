import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import users from "../test-data/users.json";
import path from "path";

test("AT-002 - Publicación con imagen + descripción (TC-004)", async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);

  await login.goto();
  await login.login(users.admin.username, users.admin.password);
  await home.assertLoggedIn();

  const caption = `QA Automation ${Date.now()}`;
  const imagePath = path.resolve(__dirname, "../assets/test-image.jpg");

  await home.createPostWithImage(caption, imagePath);
});
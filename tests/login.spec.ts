import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import users from "../test-data/users.json";

test("AT-001 - Login exitoso (TC-002)", async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);

  await login.goto();
  await login.login(users.admin.username, users.admin.password);
  await home.assertLoggedIn();
});
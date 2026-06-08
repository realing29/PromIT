import { test, expect } from "../fixtures/test";
import { LOGIN_CREDENTIALS } from "../fixtures/test-data";

test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    // при текущих настройках не требуется, на проде используется
    await page.context().clearCookies();
  });

  test("успешный вход с валидными учётными данными", async ({
    page,
    loginPage,
  }) => {
    await loginPage.goto();
    await loginPage.login(
      LOGIN_CREDENTIALS.validUsername,
      LOGIN_CREDENTIALS.validPassword,
    );

    await expect(page).toHaveURL(/\/secure/);
    await expect(loginPage.flashMessage).toContainText(
      "You logged into a secure area!",
    );
    await expect(page.getByRole("link", { name: "Logout" })).toBeVisible();
  });

  test("вход с невалидным логином и валидным паролем", async ({
    page,
    loginPage,
  }) => {
    await loginPage.goto();
    await loginPage.login(
      LOGIN_CREDENTIALS.invalidUsername,
      LOGIN_CREDENTIALS.validPassword,
    );

    await expect(page).toHaveURL(/\/login/);
    await expect(loginPage.flashMessage).toBeVisible();
    await expect(loginPage.flashMessage).not.toContainText(
      "You logged into a secure area!",
    );
  });

  test("вход с валидным логином и невалидным паролем", async ({
    page,
    loginPage,
  }) => {
    await loginPage.goto();
    await loginPage.login(
      LOGIN_CREDENTIALS.validUsername,
      LOGIN_CREDENTIALS.invalidPassword,
    );

    await expect(page).toHaveURL(/\/login/);
    await expect(loginPage.flashMessage).toContainText(
      "Your password is invalid!",
    );
  });

  test("вход с пустыми полями логина и пароля", async ({ page, loginPage }) => {
    await loginPage.goto();
    await loginPage.submitEmpty();

    await expect(page).toHaveURL(/\/login/);
    await expect(loginPage.flashMessage).toContainText(
      "Your username is invalid!",
    );
  });
});

import { test, expect } from "../fixtures/test";
import { EMAIL_CASES } from "../fixtures/test-data";

test.describe("Forgot Password", () => {
  test("валидный email — ошибка валидации не отображается", async ({
    page,
    forgotPasswordPage,
  }) => {
    await forgotPasswordPage.goto();
    await forgotPasswordPage.submitEmail(EMAIL_CASES.valid);

    await expect(forgotPasswordPage.emailError).not.toBeVisible();
    await expect(page).toHaveURL(/\/forgot-password/);
  });

  test("пустое поле email — отображается ошибка валидации", async ({
    forgotPasswordPage,
  }) => {
    await forgotPasswordPage.goto();
    await forgotPasswordPage.submitEmpty();

    await expect(forgotPasswordPage.emailError).toBeVisible();
  });

  test("email без символа @ — отображается ошибка валидации", async ({
    forgotPasswordPage,
  }) => {
    await forgotPasswordPage.goto();
    await forgotPasswordPage.submitEmail(EMAIL_CASES.noAt);

    await expect(forgotPasswordPage.emailError).toBeVisible();
  });

  test("email без домена — отображается ошибка валидации", async ({
    forgotPasswordPage,
  }) => {
    await forgotPasswordPage.goto();
    await forgotPasswordPage.submitEmail(EMAIL_CASES.noDomain);

    await expect(forgotPasswordPage.emailError).toBeVisible();
  });

  test("email с некорректным доменом — отображается ошибка валидации", async ({
    forgotPasswordPage,
  }) => {
    await forgotPasswordPage.goto();
    await forgotPasswordPage.submitEmail(EMAIL_CASES.invalidDomain);

    await expect(forgotPasswordPage.emailError).toBeVisible();
  });
});

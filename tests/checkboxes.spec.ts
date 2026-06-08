import { test, expect } from "../fixtures/test";

test.describe("Checkboxes", () => {
  test("активация и деактивация чекбокса", async ({ checkboxesPage }) => {
    await checkboxesPage.goto();

    await checkboxesPage.checkbox1.check();
    await expect(checkboxesPage.checkbox1).toBeChecked();

    await checkboxesPage.checkbox1.uncheck();
    await expect(checkboxesPage.checkbox1).not.toBeChecked();
  });

  test("переключение состояния нескольких чекбоксов", async ({
    checkboxesPage,
  }) => {
    await checkboxesPage.goto();

    await checkboxesPage.checkbox1.check();
    await checkboxesPage.checkbox2.check();
    await expect(checkboxesPage.checkbox1).toBeChecked();
    await expect(checkboxesPage.checkbox2).toBeChecked();

    await checkboxesPage.checkbox1.uncheck();
    await expect(checkboxesPage.checkbox1).not.toBeChecked();
    await expect(checkboxesPage.checkbox2).toBeChecked();
  });

  test("состояние чекбокса сохраняется после перезагрузки страницы", async ({
    checkboxesPage,
  }) => {
    await checkboxesPage.goto();

    await expect(checkboxesPage.checkbox1).not.toBeChecked();
    await expect(checkboxesPage.checkbox2).toBeChecked();

    await checkboxesPage.checkbox1.check();
    await checkboxesPage.checkbox2.uncheck();

    await checkboxesPage.reload();

    await expect(checkboxesPage.checkbox1).toBeChecked();
    await expect(checkboxesPage.checkbox2).not.toBeChecked();
  });
});

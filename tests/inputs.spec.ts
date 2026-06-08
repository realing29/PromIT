import { test, expect } from "../fixtures/test";
import { INPUTS_DATA } from "../fixtures/test-data";

test.describe("Inputs", () => {
  test("заполнение всех полей формы", async ({ inputsPage }) => {
    await inputsPage.goto();
    await inputsPage.fillAll(INPUTS_DATA);

    await expect(inputsPage.numberInput).toHaveValue(INPUTS_DATA.number);
    await expect(inputsPage.textInput).toHaveValue(INPUTS_DATA.text);
    await expect(inputsPage.passwordInput).toHaveValue(INPUTS_DATA.password);
    await expect(inputsPage.dateInput).toHaveValue(INPUTS_DATA.date);
  });

  test("отображение введённых данных в блоке Output", async ({
    inputsPage,
  }) => {
    await inputsPage.goto();
    await inputsPage.fillAll(INPUTS_DATA);
    await inputsPage.displayInputs();

    await expect(inputsPage.outputNumber).toHaveText(INPUTS_DATA.number);
    await expect(inputsPage.outputText).toHaveText(INPUTS_DATA.text);
    await expect(inputsPage.outputPassword).toHaveText(INPUTS_DATA.password);
    await expect(inputsPage.outputDate).toHaveText(INPUTS_DATA.date);
  });

  test("очистка всех полей после заполнения", async ({ inputsPage }) => {
    await inputsPage.goto();
    await inputsPage.fillAll(INPUTS_DATA);
    await inputsPage.clearInputs();

    await expect(inputsPage.numberInput).toHaveValue("");
    await expect(inputsPage.textInput).toHaveValue("");
    await expect(inputsPage.passwordInput).toHaveValue("");
    await expect(inputsPage.dateInput).toHaveValue("");
  });
});

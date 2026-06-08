import { test, expect } from "../fixtures/test";

const KEY_EXPECTATIONS: Array<{ key: string; expected: string }> = [
  { key: "Escape", expected: "ESCAPE" },
  { key: "Control", expected: "CONTROL" },
  { key: "Enter", expected: "ENTER" },
  { key: "Backspace", expected: "BACK_SPACE" },
  { key: "Tab", expected: "TAB" },
  { key: "Shift", expected: "SHIFT" },
  { key: "Alt", expected: "ALT" },
];

test.describe("Key Presses", () => {
  for (const { key, expected } of KEY_EXPECTATIONS) {
    test(`нажатие клавиши ${key} отображается в блоке Result`, async ({
      keyPressesPage,
    }) => {
      await keyPressesPage.goto();
      await keyPressesPage.pressKey(key);

      await expect(keyPressesPage.result).toHaveText(
        `You entered: ${expected}`,
      );
    });
  }
});

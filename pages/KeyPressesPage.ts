import { type Locator, type Page } from "@playwright/test";

export class KeyPressesPage {
  readonly page: Page;
  readonly targetInput: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    this.page = page;
    this.targetInput = page.locator("#target");
    this.result = page.locator("#result");
  }

  async goto() {
    await this.page.goto("/key-presses");
  }

  async pressKey(key: string) {
    await this.targetInput.click();

    await this.page.keyboard.press(key);
  }
}

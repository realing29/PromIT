import { type Locator, type Page } from "@playwright/test";

export class CheckboxesPage {
  readonly page: Page;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox1 = page.locator("#checkbox1");
    this.checkbox2 = page.locator("#checkbox2");
  }

  async goto() {
    await this.page.goto("/checkboxes");
  }

  async reload() {
    await this.page.reload();
  }
}

import { type Locator, type Page } from "@playwright/test";

export class AutocompletePage {
  readonly page: Page;
  readonly countryInput: Locator;
  readonly autocompleteList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.countryInput = page.locator("#country");
    this.autocompleteList = page.locator(".autocomplete-items div");
  }

  async goto() {
    await this.page.goto("/autocomplete");
  }

  async searchAndSelectCountry(query: string, country: string) {
    await this.countryInput.fill(query);
    await this.autocompleteList.filter({ hasText: country }).first().click();
  }
}

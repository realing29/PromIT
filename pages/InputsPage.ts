import { type Locator, type Page } from "@playwright/test";

export interface InputsFormData {
  number: string;
  text: string;
  password: string;
  date: string;
}

export class InputsPage {
  readonly page: Page;
  readonly numberInput: Locator;
  readonly textInput: Locator;
  readonly passwordInput: Locator;
  readonly dateInput: Locator;
  readonly displayButton: Locator;
  readonly clearButton: Locator;
  readonly outputNumber: Locator;
  readonly outputText: Locator;
  readonly outputPassword: Locator;
  readonly outputDate: Locator;

  constructor(page: Page) {
    this.page = page;
    this.numberInput = page.locator("#input-number");
    this.textInput = page.locator("#input-text");
    this.passwordInput = page.locator("#input-password");
    this.dateInput = page.locator("#input-date");
    this.displayButton = page.locator("#btn-display-inputs");
    this.clearButton = page.locator("#btn-clear-inputs");
    this.outputNumber = page.locator("#output-number");
    this.outputText = page.locator("#output-text");
    this.outputPassword = page.locator("#output-password");
    this.outputDate = page.locator("#output-date");
  }

  async goto() {
    await this.page.goto("/inputs");
  }

  async fillAll(data: InputsFormData) {
    await this.numberInput.fill(data.number);
    await this.textInput.fill(data.text);
    await this.passwordInput.fill(data.password);
    await this.dateInput.fill(data.date);
  }

  async displayInputs() {
    await this.displayButton.click();
  }

  async clearInputs() {
    await this.clearButton.click();
  }
}

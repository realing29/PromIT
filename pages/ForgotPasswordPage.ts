import { type Locator, type Page } from "@playwright/test";

export class ForgotPasswordPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly emailError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator("#email");
    this.submitButton = page.getByRole("button", { name: "Retrieve password" });
    this.emailError = page.getByText("Please enter a valid email address.");
  }

  async goto() {
    await this.page.goto("/forgot-password");
  }

  async submitEmail(email: string) {
    await this.emailInput.fill(email);
    await this.submitButton.click();
  }

  async submitEmpty() {
    await this.submitButton.click();
  }
}

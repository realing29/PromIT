import { test as base } from "@playwright/test";
import { AutocompletePage } from "../pages/AutocompletePage";
import { CheckboxesPage } from "../pages/CheckboxesPage";
import { ForgotPasswordPage } from "../pages/ForgotPasswordPage";
import { InputsPage } from "../pages/InputsPage";
import { KeyPressesPage } from "../pages/KeyPressesPage";
import { LoginPage } from "../pages/LoginPage";

type PageObjectFixtures = {
  loginPage: LoginPage;
  inputsPage: InputsPage;
  forgotPasswordPage: ForgotPasswordPage;
  checkboxesPage: CheckboxesPage;
  keyPressesPage: KeyPressesPage;
  autocompletePage: AutocompletePage;
};

export const test = base.extend<PageObjectFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inputsPage: async ({ page }, use) => {
    await use(new InputsPage(page));
  },
  forgotPasswordPage: async ({ page }, use) => {
    await use(new ForgotPasswordPage(page));
  },
  checkboxesPage: async ({ page }, use) => {
    await use(new CheckboxesPage(page));
  },
  keyPressesPage: async ({ page }, use) => {
    await use(new KeyPressesPage(page));
  },
  autocompletePage: async ({ page }, use) => {
    await use(new AutocompletePage(page));
  },
});

export { expect } from "@playwright/test";

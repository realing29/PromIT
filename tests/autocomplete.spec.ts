import { test, expect } from "../fixtures/test";
import { AUTOCOMPLETE_COUNTRY } from "../fixtures/test-data";

test.describe("Autocomplete", () => {
  test("поиск и выбор страны Canada через автозаполнение", async ({
    autocompletePage,
  }) => {
    await autocompletePage.goto();
    await autocompletePage.searchAndSelectCountry("Can", AUTOCOMPLETE_COUNTRY);

    await expect(autocompletePage.countryInput).toHaveValue(
      AUTOCOMPLETE_COUNTRY,
    );
  });
});

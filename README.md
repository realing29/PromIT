# PromIT — автотесты Playwright

Набор E2E-тестов для [practice.expandtesting.com](https://practice.expandtesting.com).  
Тесты написаны на TypeScript с использованием [Playwright](https://playwright.dev/) и паттерна Page Object Model для тестового примера такая архитектура выглядит достаточной и локаничной.

## Требования

- **Node.js** 18 или новее (рекомендуется LTS)
- **npm** (входит в Node.js) или **Bun** — менеджер пакетов
- Доступ в интернет (тесты выполняются против внешнего сайта)

## Установка

1. Клонируйте репозиторий и перейдите в каталог проекта:

```bash
git clone https://github.com/realing29/PromIT.git
cd PromIT
```

1. Установите зависимости:

```bash
# через npm
npm install

# или через Bun
bun install
```

1. Установите браузеры для Playwright (выполняется один раз):

```bash
# через npm
npx playwright install chromium

# или через Bun
bunx playwright install chromium
```

> В конфигурации проекта используется только **Chromium**. Для установки всех браузеров можно выполнить `playwright install` без аргументов.

## Запуск тестов

```bash
# все тесты
npm test
# или
bun run test

# интерактивный UI-режим Playwright
npm run test:ui
# или
bun run test:ui

# открыть HTML-отчёт после прогона
npm run test:report
# или
bun run test:report
```

### Дополнительные команды

```bash
# запуск одного файла
npx playwright test tests/login.spec.ts

# запуск тестов по названию
npx playwright test -g "успешный вход"

# режим отладки
npx playwright test --debug
```

## Структура проекта

```
PromIT/
├── fixtures/
│   ├── test.ts         # расширенный test с DI Page Objects
│   └── test-data.ts    # тестовые данные
├── pages/              # Page Object — описание страниц
├── tests/              # тестовые сценарии (*.spec.ts)
├── playwright.config.ts
└── package.json
```

Тесты импортируют `test` и `expect` из `fixtures/test.ts`, а не из `@playwright/test` напрямую. Page Objects внедряются как fixtures — не нужно создавать их вручную в каждом тесте.

## Покрытые страницы


| Страница        | Файл тестов                     |
| --------------- | ------------------------------- |
| Login           | `tests/login.spec.ts`           |
| Inputs          | `tests/inputs.spec.ts`          |
| Forgot Password | `tests/forgot-password.spec.ts` |
| Checkboxes      | `tests/checkboxes.spec.ts`      |
| Key Presses     | `tests/key-presses.spec.ts`     |
| Autocomplete    | `tests/autocomplete.spec.ts`    |


## Известные ограничения

- **Checkboxes** — состояние чекбоксов не сохраняется после перезагрузки страницы (ограничение тестового стенда).
- **Key Presses** — тест на клавишу Enter может падать: в активном поле Enter отправляет форму и перезагружает страницу.


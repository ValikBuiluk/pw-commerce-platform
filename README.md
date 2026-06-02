# Playwright Commerce Platform Automation Framework

End-to-end and API test automation framework built with Playwright and TypeScript.

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Allure Reporting
* GitHub Actions
* Faker.js

## Project Structure

```text
src/
 ├── fixtures/
 ├── pages/
 └── test-data/

tests/
 ├── api/
 ├── e2e/
 └── setup/

.github/
 └── workflows/
```

## Implemented Features

### E2E Tests

* User Login
* User Signup
* Product Search
* Add Product To Cart

### API Tests

* Products API Validation

### Mocking

* Network Response Mocking with Playwright Route API

## Reporting

### HTML Report

```bash
npm run report
```

### Allure Report

```bash
npm run allure:generate
npm run allure:open
```

## Run Tests

Run all tests:

```bash
npm test
```

Run E2E tests:

```bash
npm run test:e2e
```

Run API tests:

```bash
npm run test:api
```

Run Smoke tests:

```bash
npm run test:smoke
```

Run Regression tests:

```bash
npm run test:regression
```

## CI/CD

GitHub Actions automatically runs Playwright tests on every push and pull request.

## Author

Valik Builuk
QA Automation Engineer / SDET

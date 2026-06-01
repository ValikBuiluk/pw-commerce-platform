import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],

  use: {
    baseURL: process.env.BASE_URL,

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    actionTimeout: 15000,

    navigationTimeout: 30000,

    headless: true
  },

  timeout: 60000,

  expect: {
    timeout: 10000
  },

projects: [
  {
    name: 'api',
    testMatch: /.*\.api\.spec\.ts/
  },

  {
    name: 'chromium',
    testIgnore: /.*\.api\.spec\.ts/,
    use: {
      ...devices['Desktop Chrome']
    }
  },

  {
    name: 'firefox',
    testIgnore: /.*\.api\.spec\.ts/,
    use: {
      ...devices['Desktop Firefox']
    }
  },

  {
    name: 'webkit',
    testIgnore: /.*\.api\.spec\.ts/,
    use: {
      ...devices['Desktop Safari']
    }
  }
]
});
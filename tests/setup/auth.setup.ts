import { test } from '@playwright/test';

test('authenticate', async ({ page }) => {
  await page.goto('/login');

  await page.fill('[data-qa="login-email"]', process.env.USER_EMAIL!);
  await page.fill('[data-qa="login-password"]', process.env.USER_PASSWORD!);

  await page.click('[data-qa="login-button"]');

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });
});
import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage.js';

test.describe('Login Tests', () => {
  test('@smoke User can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate('/');

    await loginPage.openLoginPage();

    await loginPage.login(
      'test@test.com',
      'Password123'
    );

    await loginPage.verifyLogin();
  });
});
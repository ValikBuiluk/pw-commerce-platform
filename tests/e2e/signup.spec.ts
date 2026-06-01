import { test } from '@playwright/test';
import { SignupPage } from '../../src/pages/SignupPage.js';
import { generateUser } from '../../src/test-data/user.data.js';

test.describe('Signup Tests', () => {
  test('@smoke User can create a new account', async ({ page }) => {
    const user = generateUser();
    const signupPage = new SignupPage(page);

    await signupPage.navigate('/');
    await signupPage.openSignupPage();
    await signupPage.startSignup(user.name, user.email);
    await signupPage.completeAccountDetails(user);
    await signupPage.verifyAccountCreated();
  });
});
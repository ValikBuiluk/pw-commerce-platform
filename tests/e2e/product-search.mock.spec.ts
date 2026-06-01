import { test, expect } from '@playwright/test';

test.describe('Network Mocking', () => {
  test('@mock Should mock browser-side API request', async ({ page }) => {
    await page.route('**/api/productsList', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          responseCode: 200,
          products: [
            {
              id: 999,
              name: 'Mock Playwright T-Shirt',
              price: 'Rs. 999',
              brand: 'PW Brand'
            }
          ]
        })
      });
    });

    await page.goto('/');

    const body = await page.evaluate(async () => {
      const response = await fetch('/api/productsList');
      return response.json();
    });

    expect(body.products[0].name).toBe('Mock Playwright T-Shirt');
    expect(body.products[0].brand).toBe('PW Brand');
  });
});
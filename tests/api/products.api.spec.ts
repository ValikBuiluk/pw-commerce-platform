import { test, expect } from '@playwright/test';
import { ProductsApi } from './ProductsApi.js';

test.describe('Products API', () => {
  test('@api Should return products list', async ({ request }) => {
    const productsApi = new ProductsApi(request);

    const responseBody = await productsApi.getAllProducts();

    expect(responseBody.products.length).toBeGreaterThan(0);

    expect(responseBody.products[0]).toHaveProperty('id');
    expect(responseBody.products[0]).toHaveProperty('title');
    expect(responseBody.products[0]).toHaveProperty('price');

    expect(typeof responseBody.products[0].id).toBe('number');
    expect(typeof responseBody.products[0].title).toBe('string');
    expect(typeof responseBody.products[0].price).toBe('number');
  });
});
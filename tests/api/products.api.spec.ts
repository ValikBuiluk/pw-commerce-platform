import { test, expect } from '@playwright/test';
import { ProductsApi } from './ProductsApi.js';

test.describe('Products API', () => {
  test('@api Should return products list', async ({ request }) => {
    const productsApi = new ProductsApi(request);

    const responseBody = await productsApi.getAllProducts();

    expect(responseBody).toHaveProperty('products');
    expect(responseBody.products.length).toBeGreaterThan(0);
    expect(responseBody.products[0]).toHaveProperty('id');
    expect(responseBody.products[0]).toHaveProperty('name');
    expect(responseBody.products[0]).toHaveProperty('price');
  });
});
import { APIRequestContext, expect } from '@playwright/test';

export class ProductsApi {
  constructor(private request: APIRequestContext) {}

  async getAllProducts() {
    const response = await this.request.get('/api/productsList');

    expect(response.status()).toBe(200);

    return response.json();
  }
}
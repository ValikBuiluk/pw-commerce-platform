import { APIRequestContext, expect } from '@playwright/test';

export class ProductsApi {
  constructor(private request: APIRequestContext) {}

  async getAllProducts() {
    const response = await this.request.get('/products');

    expect(response.ok()).toBeTruthy();

    return response.json();
  }
}
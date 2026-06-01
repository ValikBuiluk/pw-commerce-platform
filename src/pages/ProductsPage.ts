import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage.js';

export class ProductsPage extends BasePage {
  readonly productsLink: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchedProductsTitle: Locator;
  readonly firstProductAddToCartButton: Locator;
  readonly viewCartButton: Locator;

  constructor(page: Page) {
    super(page);

    this.productsLink = page.locator('a[href="/products"]');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsTitle = page.locator('h2:has-text("Searched Products")');
    this.firstProductAddToCartButton = page.locator('.productinfo .btn').first();
    this.viewCartButton = page.locator('u:has-text("View Cart")');
  }

  async openProductsPage() {
    await this.productsLink.click();
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async verifySearchResultsVisible() {
    await expect(this.searchedProductsTitle).toBeVisible();
  }

  async addFirstProductToCart() {
    await this.firstProductAddToCartButton.click();
  }

  async openCartFromModal() {
    await this.viewCartButton.click();
  }
}
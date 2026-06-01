import { test, expect } from '../../src/fixtures/test.fixture.js';

test.describe('Product and Cart Flow', () => {
  test('@regression User can search product and add it to cart', async ({ productsPage, page }) => {
    await productsPage.navigate('/');
    await productsPage.openProductsPage();

    await expect(page).toHaveURL(/products/);

    await productsPage.searchProduct('dress');
    await productsPage.verifySearchResultsVisible();

    await productsPage.addFirstProductToCart();
    await productsPage.openCartFromModal();

    await expect(page).toHaveURL(/view_cart/);
    await expect(page.locator('.cart_description')).toBeVisible();
  });
});
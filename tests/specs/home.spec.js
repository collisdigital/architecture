// @ts-check
import { test, expect } from '../test-setup';

test.describe('Home page', () => {
  test('should have the correct heading', async ({ homePage }) => {
    await homePage.goto();
    await expect(homePage.welcomeHeading).toBeVisible();
  });
});

// @ts-check

export class HomePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.welcomeHeading = page.getByRole('heading', { name: 'Welcome to NHS Wales Architecture' });
    }

    async goto() {
        await this.page.goto('/');
    }
}

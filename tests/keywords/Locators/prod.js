
export class productPage {
    constructor(page) {
        this.page = page
        this.backpack = page.getByTestId('add-to-cart-sauce-labs-backpack')
        this.cartButton = page.getByTestId('shopping-cart-badge')
        this.checkout = page.getByTestId('checkout')

        
    }
    async singleProductsHaveCorrectChildren () {
        await this.backpack.click();       
        await this.cartButton.click()
        await this.checkout.click()
    }
}


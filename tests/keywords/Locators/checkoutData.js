const {faker} = require('@faker-js/faker');
const { expect } = require('@playwright/test')
const {productPage} = require('../Locators/prod')


export class checkoutData {
    constructor(page) {
        this.productPage = new productPage(page);
        this.page = page
        this.firstName = page.getByTestId('firstName')
        this.lastName  = page.getByTestId('lastName')
        this.zipCode = page.getByTestId('postalCode')
        this.continueButton = page.getByTestId('continue')
        this.finishButton = page.getByTestId('finish')
        this.subtotal = page.getByTestId('subtotal-label')
    }
    async singleProductsHaveCorrectChildren () {
        await this.productPage.productToAddToCart.click(); 
        await this.productPage.cartButton.click()
        await this.productPage.checkout.click()
    }
    async fillUserData () {
        await this.firstName.fill(faker.person.firstName());
        await this.lastName.fill(faker.person.lastName());
        await this.zipCode.fill(faker.location.zipCode());
        await this.continueButton.click();
        await expect(this.page).toHaveURL(' https://www.saucedemo.com/checkout-step-two.html',{ timeout: 5000 });
       
    }
    async finishCheckOutProcess () {
        this.frontEndSum = parseInt(`${await this.subtotal.innerText()}`.split('$')[1])
        this.backEndSUm = parseInt(`${await this.productPage.calculateSum()}`.split('$')[1])
        expect(this.frontEndSum).toEqual(this.backEndSUm)
        await this.finishButton.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html',{ timeout: 5000 });
        
    }

}
const {faker} = require('@faker-js/faker');
const { expect } = require('@playwright/test')


export class checkoutData {
    constructor(page) {
        this.page = page
        this.firstName = page.getByTestId('firstName')
        this.lastName  = page.getByTestId('lastName')
        this.zipCode = page.getByTestId('postalCode')
        this.continueButton = page.getByTestId('continue')
        this.finishButton = page.getByTestId('finish')
    }
    async fillUserData () {
        await this.firstName.fill(faker.person.firstName());
        await this.lastName.fill(faker.person.lastName());
        await this.zipCode.fill(faker.location.zipCode());
        await this.continueButton.click();
        await expect(this.page).toHaveURL(' https://www.saucedemo.com/checkout-step-two.html',{ timeout: 5000 });
       
    }
    async finishCheckOutProcess () {
        await this.finishButton.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-complete.html',{ timeout: 5000 });
        
    }

}
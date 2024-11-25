const testData = JSON.parse(JSON.stringify(require('../Data/loginData')))
const {productPage} = require('../Locators/prod');
const { test, expect } = require('@playwright/test')



export class mainePageLocators {
  

    constructor(page) {
        this.page = page;
        this.userName = page.getByTestId('username');
        this.password = page.getByTestId('password');
        this.clickButton = page.locator('#login-button');
        this.error = page.getByTestId('error')

    }
    async openPage () {
        await this.page.goto("https://www.saucedemo.com/");
    }
   
    async fillUser () {
        const randomUser = await testData.data.users[Math.floor(Math.random() * testData.data.users.length)];
        console.log(randomUser)
        await this.userName.fill(randomUser)

    }
    async fillUserWithWrongUser () {
        await this.userName.fill((Math.random() + 1).toString(36).substring(7))
    }
    async fillPassword () {
       await this.password.fill(testData.data.passwords)
    }
    async click () {
        await this.clickButton.click()
    }
    async checkSignIn () {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html',{ timeout: 10_000 });
    }
    async checkSignInFalse () {
        await expect(this.error).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }
}

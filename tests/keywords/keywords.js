const {mainePageLocators} = require('./Locators/mainPageLocators') 
const {productPage} = require('./Locators/prod') 
const {checkoutData} = require('./Locators/checkoutData')


exports.dataKeywords = class dataKeywords {

    constructor(page) {
        this.mainePageLocator = new mainePageLocators(page)
        this.productPage = new productPage(page)
        this.checkOutData = new checkoutData(page)

    }
   
    async successfullLogin () {
        await this.mainePageLocator.openPage();
        await this.mainePageLocator.fillUser();
        await this.mainePageLocator.fillPassword();
        await this.mainePageLocator.click()
        await this.mainePageLocator.checkSignIn();
    }

    async unsucessfullLogin () {   
        await this.mainePageLocator.openPage();
        await this.mainePageLocator.fillUserWithWrongUser()
        await this.mainePageLocator.fillPassword();
        await this.mainePageLocator.click()
        await this.mainePageLocator.checkSignInFalse();

    }
    async checkSingleProductFlow () {
        await this.successfullLogin()
        await this.checkOutData.singleProductsHaveCorrectChildren()
        await this.checkOutData.fillUserData()
        await this.checkOutData.finishCheckOutProcess();
        
    }


}

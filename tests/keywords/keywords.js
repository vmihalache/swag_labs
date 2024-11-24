const {mainePageLocators} = require('./Locators/mainPageLocators') 

exports.dataKeywords = class dataKeywords {

    constructor(page) {
        this.mainePageLocator = new mainePageLocators(page)

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


}

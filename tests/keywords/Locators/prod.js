const testData = JSON.parse(JSON.stringify(require('../Data/loginData')))
const product = (listOfProducts) => {
    return listOfProducts[Math.floor(Math.random()*listOfProducts.length)];
}
// console.log(product(testData.data.products))
export class productPage {
    constructor(page) {
        this.page = page
        this.productToAddToCart = page.getByTestId(`add-to-cart-${Object.keys(product(testData.data.products))[0]}`)
        this.cartButton = page.getByTestId('shopping-cart-badge')
        this.checkout = page.getByTestId('checkout')

        
    }
    async singleProductsHaveCorrectChildren () {
        await this.productToAddToCart.click();       
        await this.cartButton.click()
        await this.checkout.click()
    }
}


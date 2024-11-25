const testData = JSON.parse(JSON.stringify(require('../Data/loginData')))
const product = (listOfProducts) => {
    return listOfProducts[Math.floor(Math.random()*listOfProducts.length)];
}

export class productPage {
    constructor(page) {
        this.page = page
        this.sum  = 0
        this.product = product(testData.data.products)
        this.productToAddToCart = page.getByTestId(`add-to-cart-${Object.keys(this.product)[0]}`)
        this.productPrice = (Object.values(this.product))
        this.cartButton = page.getByTestId('shopping-cart-badge')
        this.checkout = page.getByTestId('checkout')

    }
    async calculateSum () {
        this.sum += this.productPrice      
        return this.sum

    }

}


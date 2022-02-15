class ProductsScreen {
    get #addProduct(){ return $('~Add products') } 
    get #simplePhysical(){return $('android=new UiSelector().index(0).className("android.view.ViewGroup")')} 

    async clickAddProduct(){
        await this.#addProduct.waitForExist({ timeout: 20000 })
        await this.#addProduct.click()
    }
    async clickSimplePhysical(){
        await this.#simplePhysical.waitForExist({ timeout: 20000})
        await this.#simplePhysical.click()
    }

}

module.exports = new ProductsScreen
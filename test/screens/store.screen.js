class StoreScreen {
    get #storeLogo(){ return $('~My store') }
    get #storeName(){ return $('id:toolbar_subtitle') }
    get #products() { return $('~Products') }    
    get #addProduct(){ return $('~Add products') } 
    get #simplePhysical(){ return $('android=new UiSelector().index(0).className("android.view.ViewGroup")') } 

    async storeLogoIsDisplayed(){ 
        await this.#storeLogo.waitForExist({ timeout: 20000 })
        return await this.#storeLogo.isDisplayed()
    }
    async getStoreName(){ 
        await this.#storeName.waitForExist({ timeout: 20000 })
        return await this.#storeName.getText() 
    }
    async navigate(){
        await this.#products.waitForExist({ timeout: 20000 })
        await this.#products.click()
        await this.#addProduct.waitForExist({ timeout: 20000 })
        await this.#addProduct.click()
        await this.#simplePhysical.waitForExist({ timeout: 20000})
        await this.#simplePhysical.click()
    }

}

module.exports = new StoreScreen
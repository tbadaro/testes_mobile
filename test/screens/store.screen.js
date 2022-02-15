class StoreScreen {
    get #storeLogo(){ return $('~My store') }
    get #storeName(){ return $('id:toolbar_subtitle') }
    get #products() { return $('~Products')}    

    async storeLogoIsDisplayed(){ 
        await this.#storeLogo.waitForExist({ timeout: 20000 })
        return await this.#storeLogo.isDisplayed()
    }
    async getStoreName(){ 
        await this.#storeName.waitForExist({ timeout: 20000 })
        return await this.#storeName.getText() 
    }
    async goToProducts(){
        await this.#products.waitForExist({ timeout: 20000 })
        await this.#products.click()
    }

}

module.exports = new StoreScreen
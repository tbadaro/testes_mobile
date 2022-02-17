class NewProductsScreen {      
    get #productName(){ return $('id:editText') }
    get #describe(){ return $('android= new UiSelector().className("android.view.ViewGroup").index(1).instance(0)')}
    get #description(){ return $('id:visualEditor')}
    get #descriptionText(){ return $('android= new UiSelector().className("android.widget.TextView").index(1).instance(1)')}
    get #returnToProdScreen(){ return $('~Navigate up')}
    get #priceText(){ return $('android= new UiSelector().className("android.widget.TextView").index(2).instance(0)')}   
    get #inventoryText(){ return $('android= new UiSelector().className("android.widget.TextView").index(2).instance(1)')}
    

    // Nome do produto e descrição 
    async manageProduct(prodName, prodDescription){
        await this.#productName.waitForExist({ timeout: 20000 })
        await this.#productName.setValue(prodName)
        await this.#describe.waitForExist({ timeout: 20000 })
        await this.#describe.click()
        await this.#description.waitForExist({ timeout: 20000 })
        await this.#description.setValue(prodDescription)
        await this.#returnToProdScreen.click()
    }

    // Asserções
    async getProductName(){ 
        await this.#productName.waitForExist({ timeout: 20000 })
        return await this.#productName.getText() 
    }   
    async getDescription(){ 
        await this.#descriptionText.waitForExist({ timeout: 20000 })
        return await this.#descriptionText.getText() 
    }   
    async getPrice(){ 
        await this.#priceText.waitForExist({ timeout: 20000 })
        return await this.#priceText.getText() 
    }
    async getInventory(){
        await this.#inventoryText.waitForExist({ timeout: 20000 })
        return await this.#inventoryText.getText()
    }

}

module.exports = new NewProductsScreen
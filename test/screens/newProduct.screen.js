class NewProductsScreen {      
    get #productName(){ return $('id:editText') }
    get #describe(){ return $('android= new UiSelector().className("android.view.ViewGroup").index(1).instance(0)')}
    get #description(){ return $('id:visualEditor')}
    get #descriptionText(){ return $('android= new UiSelector().className("android.widget.TextView").index(1).instance(1)')}
    get #returnToProdScreen(){ return $('~Navigate up')}
    get #priceButton(){ return $('android= new UiSelector().className("android.view.ViewGroup").index(0).instance(8)')}
    get #priceText(){ return $('android= new UiSelector().className("android.widget.TextView").index(2).instance(0)')}
    get #inventoryButton(){ return $('android= new UiSelector().className("android.view.ViewGroup").index(2)')}
    get #inventoryText(){ return $('android= new UiSelector().className("android.widget.TextView").index(2).instance(1)')}
    

    // Nome do produto
    async setProductName(prodName){
        await this.#productName.waitForExist({ timeout: 20000 })
        await this.#productName.setValue(prodName)
    }
    async getProductName(){ 
        await this.#productName.waitForExist({ timeout: 20000 })
        return await this.#productName.getText() 
    }

    //Descricao do produto
    async clickDescribe(){
        await this.#describe.waitForExist({ timeout: 20000 })
        await this.#describe.click()
    }
    async describreProduct(prodDescription){
        await this.#description.waitForExist({ timeout: 20000 })
        await this.#description.setValue(prodDescription)
        await this.#returnToProdScreen.click()
    }
    async getDescription(){ 
        await this.#descriptionText.waitForExist({ timeout: 20000 })
        return await this.#descriptionText.getText() 
    }

    //Preco
    async clickAddPrice(){
        await this.#priceButton.waitForExist({ timeout: 20000 })
        await this.#priceButton.click()
    }
    async getPrice(){ 
        await this.#priceText.waitForExist({ timeout: 20000 })
        return await this.#priceText.getText() 
    }

    //Inventorio
    async clickInventory(){
        await this.#inventoryButton.waitForExist({ timeout: 20000 })
        await this.#inventoryButton.click()
    }
    async getInventory(){
        await this.#inventoryText.waitForExist({ timeout: 20000 })
        return await this.#inventoryText.getText()
    }

}

module.exports = new NewProductsScreen
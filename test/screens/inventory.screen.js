class InventoryScreen {  
    get #skuField(){return $('android=new UiSelector().className("android.widget.EditText").text("SKU")')} 
    get #manageStockSwitch(){ return $('android=new UiSelector().className("android.widget.Switch").text("Manage stock OFF")')}
    get #quantity(){ return $('android=new UiSelector().className("android.widget.EditText").instance(1)')}
    get #backorders(){ return $('android=new UiSelector().text("Backorders")')}
    get #doNotAllow(){ return $('android=new UiSelector().text("Do not allow")')}
    get #limitOnePerOrder(){ return $('android=new UiSelector().text("Limit one per order ON")')}
    get #back(){ return $('~Navigate up')}
    get #inventoryButton(){ return $('android= new UiSelector().className("android.view.ViewGroup").index(2)')}

    async manageInventory(sku, quantity){
        await this.#inventoryButton.waitForExist({ timeout: 20000 })
        await this.#inventoryButton.click()
        await this.#skuField.waitForExist({ timeout: 20000 })
        await this.#skuField.setValue(sku)
        await this.#manageStockSwitch.click()
        await this.#quantity.waitForExist({ timeout: 20000 })
        await this.#quantity.setValue(quantity)
        await this.#backorders.click()
        await this.#doNotAllow.waitForExist({ timeout: 20000 })        
        await this.#doNotAllow.click()
        await this.#limitOnePerOrder.waitForExist({ timeout: 20000 })
        await this.#limitOnePerOrder.click()
        await this.#back.waitForExist({timeout: 2000})
        await this.#back.click()
    }


}

module.exports = new InventoryScreen
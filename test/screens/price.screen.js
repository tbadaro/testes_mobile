class PriceScreen {       
    get #regularPrice(){ return $('android= new UiSelector().className("android.widget.EditText").instance(0)')}
    get #salePrice(){ return $('android= new UiSelector().className("android.widget.EditText").instance(1)')}
    get #scheduleSaleSwitch(){ return $('id:switchSetting_switch')}
    get #from(){ return $('android= new UiSelector().className("android.widget.EditText").text("From")')}
    get #nextMonth(){ return $('~Next month')}
    get #dayTwelve(){ return $('android= new UiSelector().index(11)')}
    get #confirm() { return $('android= new UiSelector().className("android.widget.Button").text("OK")')}
    get #to(){ return $('android= new UiSelector().className("android.widget.EditText").text("To")')}
    get #dayEighteen(){ return $('android= new UiSelector().index(17)')}
    get #taxStatus(){ return $('android= new UiSelector().className("android.widget.EditText").text("Taxable")')}
    get #shipping(){ return $('android= new UiSelector().className("android.widget.CheckedTextView").text("Shipping")')}
    get #taxClass(){ return $('android= new UiSelector().className("android.widget.EditText").text("Taxas padrões")')}
    get #zeroTax(){ return $('android= new UiSelector().className("android.widget.CheckedTextView").text("Taxa zero")')}
    get #back(){ return $('~Navigate up')}

    async setPrice(regPrice, salePrice){
        await this.#regularPrice.waitForExist({ timeout: 20000 })
        await this.#regularPrice.setValue(regPrice)
        await this.#salePrice.setValue(salePrice)
        
    }
    async scheduleSale(){
        await this.#scheduleSaleSwitch.click()
        await this.#from.waitForExist({timeout: 2000})
        await this.#from.click()
        await this.#nextMonth.waitForExist({timeout: 2000})
        await this.#nextMonth.click()
        await this.#dayTwelve.waitForExist({timeout: 2000})
        await this.#dayTwelve.click()            
        await this.#confirm.click()
        await this.#to.waitForExist({timeout: 2000})
        await this.#to.click()
        await this.#nextMonth.waitForExist({timeout: 2000})
        await this.#nextMonth.click()
        await this.#dayEighteen.waitForExist({timeout: 2000})
        await this.#dayEighteen.click()
        await this.#confirm.click()
    }
    async defineTaxSettings(){
        await this.#taxStatus.waitForExist({timeout: 2000})
        await this.#taxStatus.click()
        await this.#shipping.waitForExist({timeout: 2000})
        await this.#shipping.click()
        await this.#taxClass.waitForExist({timeout: 2000})
        await this.#taxClass.click()
        await this.#zeroTax.waitForExist({timeout: 2000})
        await this.#zeroTax.click()
    }
    async returToNewProduct(){
        await this.#back.waitForExist({timeout: 2000})
        await this.#back.click()
    }

}

module.exports = new PriceScreen
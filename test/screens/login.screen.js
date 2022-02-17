class LoginScreen {
    get #enterStoreAdress(){ return $('id:button_login_store') }
    get #StoreAdress(){ return $('android.widget.EditText') }
    get #continue(){ return $('id:bottom_button') }
    get #storeCredentials(){ return $('android=new UiSelector().index(4)') }
    get #username(){ return $('android=new UiSelector().text("Username")')}
    get #password(){ return $('android=new UiSelector().text("Password")')}
    get #passwordButton(){ return $('id:login_enter_password') }

    async login(url, username, password){ 
        await this.#enterStoreAdress.click()
        await this.#StoreAdress.setValue(url) 
        await this.#continue.click() 
        await this.#storeCredentials.waitForExist({ timeout: 20000 })
        await this.#storeCredentials.click()
        await this.#password.waitForExist({ timeout: 20000 })
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
        await this.#passwordButton.click()  
        await this.#password.waitForExist({ timeout: 20000 })
        await this.#password.setValue(password)
        await this.#continue.click()
    }

}

module.exports = new LoginScreen
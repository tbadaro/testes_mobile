class LoginScreen {
    get #StoreAdress(){ return $('android.widget.EditText') }
    get #continue(){ return $('id:bottom_button') }
    get #storeCredentials(){ return $('android=new UiSelector().index(4)') }
    get #username(){ return $('android=new UiSelector().text("Username")')}
    get #password(){ return $('android=new UiSelector().text("Password")')}
    get #passwordButton(){ return $('id:login_enter_password') }

    async setStoreAddress(url){ 
        await this.#StoreAdress.setValue(url) 
        await this.#continue.click() 
    }
    async clickCredentials() { 
        await this.#storeCredentials.waitForExist({ timeout: 20000 })
        await this.#storeCredentials.click() 
    }
    async login(username, password){
        await this.#password.waitForExist({ timeout: 20000 })
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
    }
    async clickEnterPassword() { this.#passwordButton.click() }
    async enterPasword(password) { 
        await this.#password.waitForExist({ timeout: 20000 })
        await this.#password.setValue(password)
        await this.#continue.click()
    }

}

module.exports = new LoginScreen
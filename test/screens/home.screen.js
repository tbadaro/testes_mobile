class HomeScreen {
    get #enterStoreAdress(){ return $('id:button_login_store') }

    async goToLogin(){ this.#enterStoreAdress.click() }

}

module.exports = new HomeScreen
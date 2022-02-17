const loginScreen = require("../screens/login.screen");
const storeScreen = require("../screens/store.screen");
const newProductScreen = require("../screens/newProduct.screen");
const priceScreen = require("../screens/price.screen");
const inventoryScreen = require("../screens/inventory.screen");

let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let prodName = 'Test Product'
let testDescription = 'This is a test description for a product'
let sku = 'Test product'
let regPrice = 120
let salePrice = 40
let quantity = 20
let priceText1 = 'Regular price: R$'+regPrice+',00'
let priceText2 = 'Sale price: R$'+salePrice+',00'
let inventoryText1 = 'SKU: '+sku
let inventoryText2 = 'Stock quantity: '+quantity
let inventoryText3 = 'Backorders: Do not allow'

describe('Access Admin Panel', () => {
    it('should register a new product', async () => {
        //Login
        await loginScreen.login(urlLoja, usuario, senha)
        //Navegacao
        await storeScreen.navigate()    
        //Nome e descriçao
        await newProductScreen.manageProduct(prodName, testDescription)       
        //preco
        await priceScreen.setPriceAndSale(regPrice, salePrice)    
        //inventorio
        await inventoryScreen.manageInventory(sku, quantity)
        //Assercoes     
        await expect (await newProductScreen.getProductName()).toEqual(prodName)
        await expect (await newProductScreen.getDescription()).toEqual(testDescription)
        await expect (await newProductScreen.getPrice()).toContain(priceText1)
        await expect (await newProductScreen.getPrice()).toContain(priceText2)
        await expect (await newProductScreen.getInventory()).toContain(inventoryText1)
        await expect (await newProductScreen.getInventory()).toContain(inventoryText2)
        await expect (await newProductScreen.getInventory()).toContain(inventoryText3)
    });
})
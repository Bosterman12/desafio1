class ProductManager {
    constructor(){
        this.products=[]
    }
    //Metodos Solicitados
}

class Product {
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
}

const product1 = new Product ("salame", "picado grueso", "100","","s1","30")
const product2 = new Product ("queso","pategras","200","","q1","20")
const product3 = new Product ("leber", "leberwurst","50","","l1")
const product4 = new Product ("pan","flauta","10","","p1","100")

const productManager = new ProductManager()

productManager.products.push(product1)
productManager.products.push(product2)
productManager.products.push(product3)
productManager.products.push(product4)
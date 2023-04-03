class ProductManager {
    constructor(){
        this.products=[]
        
        
    }
    addProduct(product){
        if(this.products.find(producto=> producto.code == product.code)){
            return "Producto existente"
        }else{
            this.products.push(product)
        }
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const product = this.products.find(producto => producto.id == id)

        if (product){
            return product
        }else{
            return "Not Found"
        }
    }


    
}

class Product {
    constructor(title = "", description = "", price = 0, thumbnail = "", code = "", stock = 0){
        
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementID()
    }
    static incrementID(){
        if(this.idIncrement){
            this.idIncrement++
        }else{
            this.idIncrement = 1
        }

        return this.idIncrement
    }
     
    
};







const product1 = new Product ("salame", "picado grueso", 100,"","s1",30)
const product2 = new Product ("queso","pategras",200,"","q1",20)
const product3 = new Product ("leber", "leberwurst",50,"","l1",50)
const product4 = new Product ("pan","flauta",10,"","p1",100)

console.log(product1)
console.log(product2)
console.log(product3)
console.log(product4)


const productManager = new ProductManager()

productManager.addProduct(product1)
productManager.addProduct(product2)
console.log(productManager.addProduct(product1))
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(5))
console.log(productManager.getProducts())

console.log(productManager)



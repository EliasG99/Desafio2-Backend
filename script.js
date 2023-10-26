const ProductManager = require('./ProductManager.js');

const productManager = new ProductManager('productos.json');


// const products = productManager.getProducts();

// console.log(products)

// Se llama addProduct para completar los campos

const productInfo = {
    title: 'Remera 1',
    description: 'Descripción del producto 1',
    price: 1000,
    thumbnail: 'imagen1.jpg',
    code: '000',
    stock: 100
}

// ------ USO DE addProduct -------

// const nuevoProducto = productManager.addProduct(productInfo);
// const products = productManager.getProducts();

// console.log(nuevoProducto)
// console.log(products)

// ------ USO DE getProductById ------

// const productId = productManager.getProductById(1)

// console.log(productId)


// ------ USO DE updateProduct

// const productAct = productManager.updateProduct(1, {
//     ...productInfo,
//     price: 2000,
// });

// console.log(productAct);



//// ---- USO DE deleteProduct -----

const products = productManager.getProducts();

console.log(products)


productManager.deleteProduct(1);


const producto = productManager.getProducts();

console.log(producto)

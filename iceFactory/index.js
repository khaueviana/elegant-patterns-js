// makeShoppingCart.js
function makeShoppingCart({
    db
}) {
    return Object.freeze({
        addProduct,
        empty,
        getProducts,
        removeProduct,
        // others
    })
    function addProduct(product) {
        db.push(product)
    }

    function empty() {
        db = []
    }
    function getProducts() {
        return Object
            .freeze([...db])
    }
    function removeProduct(id) {
        // remove a product
    }
    // other functions
}
// someOtherModule.js
const db = []
const cart = makeShoppingCart({ db })
cart.addProduct({
    name: 'foo',
    price: 9.99
})

console.log(JSON.stringify(cart.getProducts()));
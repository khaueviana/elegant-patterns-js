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

/*We no longer need new. 
- We just invoke a plain old JavaScript function to create our cart object.
- We no longer need this. 

- We can access the db object directly from our member functions.

- Our cart object is completely immutable. 
Object.freeze() freezes the cart object so that new properties can’t be added to it, existing properties can’t be removed or changed, and the prototype can’t be changed either. Just remember that Object.freeze() is shallow, so if the object we return contains an array or another object we must make sure to Object.freeze() them as well. Also, if you’re using a frozen object outside of an ES Module, you need to be in strict mode to make sure that re-assignments cause an error rather than just failing silently.
*/
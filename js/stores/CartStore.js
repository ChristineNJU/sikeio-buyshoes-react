const EventEmitter = require("events");

let emitter = new EventEmitter();

function emitChange() {
    emitter.emit("change");
}

let _cartItems = {
     "jameson-vulc": {
       "id": "jameson-vulc",
       "quantity": 1
     }
};


module.exports = {

    // Reader methods
    getCartItems(){
        return _cartItems;
    },

    cartItems(){
        return _cartItems;
    },

    // Writer methods. These are the "actions".
    setCartItems(cartItems){
        _cartItems = cartItems;
    },

    addCartItem(productId){
        _cartItems[productId] = {
            "id" : productId,
            "quantity":1
        };
        emitter.emit("change");
    },

    deleteCartItem(productId){
        delete _cartItems[productId];
        emitter.emit("change");
    },

    updateCartItemQuantity(productId,quantity){
        if(quantity < 1){
            return;
        }
        _cartItems[productId].quantity = quantity;
        emitter.emit("change");
    },

    addChangeListener(callback) {
        emitter.addListener("change",callback)
    },

    removeChangeListener(callback) {
        emitter.removeListener("change",callback)
    }
};
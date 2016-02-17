const React = require("react");
const CartStore = require("../stores/CartStore.js");
const cartItems = CartStore.getCartItems();
const products = require("../data.js").products;

class Checkout extends React.Component{

    componentDidMount(){
        CartStore.addChangeListener(this.forceUpdate.bind(this));
    }

    render(){

        let total = 0;
        for(let item in cartItems){
            total += products[item].price * cartItems[item].quantity;
        }
        total.toFixed(2);

        return(
            <div className="checkout">

                <hr className="checkout__divider"/>

                <input id="field2" type="text" className="checkout__coupon-input" placeholder="coupon code"/>

                {/*<div className="checkout__line">
                    <div className="checkout__line__label">
                        Discount
                    </div>

                    <div className="checkout__line__amount">
                        -$90
                    </div>
                </div>*/}

                <div className="checkout__line">
                    <div className="checkout__line__label">
                        Subtotal
                    </div>

                    <div className="checkout__line__amount checkout__line__amount--strikeout">
                        ${total}
                    </div>
                </div>

                {/*<div className="checkout__line">
                    <div className="checkout__line__amount checkout__line__amount--omg-savings">
                        ${total}
                    </div>
                </div>*/}

                <a className="checkout__button">
                    <img  className="checkout__button__icon" src="img/cart-icon.svg"/>
                    <div className="checkout__button__label">
                        Checkout
                    </div>
                </a>

            </div>
        );
    }
}

module.exports = Checkout;
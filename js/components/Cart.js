const React = require("react");
const QuantityControl = require("./Quantity.js");
//const cartItems = require("../data.js").cartItems;
const CartStore = require("../stores/CartStore.js");
//const cartItems = CartStore.getCartItems();
const {deleteCartItem} = CartStore;
//const products = require("../data.js").products;
const Ps = require("perfect-scrollbar");
const ConnectedStore = require("./ConnectedStore.js");

class ConnectedCart extends React.Coponent {
    render(){
        return(
            <ConnectedStore store = {CartStore} propNames={["cartItems","products"]}>
                {props => <Cart cartItems={cartItems} products={products}/>}
            </ConnectedStore>
        );
    }
}

let Cart = React.createClass({

    componentDidMount(){
        let $content = React.findDOMNode(this.refs.cart__content);
        Ps.initialize($content);
        //CartStore.addChangeListener(this.forceUpdate.bind(this));
    },

    renderCartItems(cartItems,products){
        let cartViews = Object.keys(cartItems).map(id =>{
            return <CartItem key={id} cartItem={cartItems[id]} product={products[id]}/>
        });

        return cartViews;
    },

    render(){
        let {cartItems} = this.props;
        let {products} = this.props;

        return(
            <div ref="cart__content" className="cart__content">
                {this.renderCartItems(cartItems,products)}
            </div>
        );
    }
});

class CartItem extends React.Component{

    renderPrice(price,quantity){
        if(quantity > 1){
            return "$"+ price + " x"+ quantity;
        }else{
            return "$"+ price;
        }
    }

    deleteItem(product){
        deleteCartItem(product.id);
    }

    render(){
        let {quantity} = this.props.cartItem;
        let {name,price,imagePath} = this.props.product;

        return(
            <div class="cart-item">
                <div className="cart-item__top-part">
                    <div className="cart-item__image">
                        <img  src= {imagePath}/>
                    </div>

                    <div className="cart-item__top-part__middle">
                        <div className="cart-item__title">
                            {name}
                        </div>

                        <div className="cart-item__price">
                            {this.renderPrice(price,quantity)}
                        </div>
                    </div>

                    <img onClick={this.deleteItem.bind(this,this.props.product)} className="cart-item__trash" src="img/trash-icon.svg"/>
                </div>

                <div className="cart-item__qty">
                    <QuantityControl item={this.props.cartItem} />
                </div>

            </div>
        );
    }
}

module .exports = ConnectedCart;
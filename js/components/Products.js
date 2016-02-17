const React = require("react");
const QuantityControl = require("./Quantity.js");
//const cartItems = require("../stores/CartStore.js").getCartItems()
const CartStore = require("../stores/CartStore.js");
const {addCartItem} = CartStore;
const products = require("../data.js").products;


let Products = React.createClass({

    componentDidMount(){
        CartStore.addChangeListener(this.forceUpdate.bind(this));
    },

    renderProducts(products) {
        let productViews = Object.keys(products).map(id => {
            //console.log(products[id]);
            return <ProductView key={id} product={products[id]} />;
        });
        return productViews;
    },

    render() {

        return (
            <div className="products">
                {this.renderProducts(products)};
            </div>
        );
    }
});


class ProductView extends React.Component {

    onClick(product,e) {
        addCartItem(product.id);
    }

    renderQuantity(product, CartItems) {
        //console.log("22");
        let isZero = true;
        Object.keys(CartItems).map(id=> {
            if (product.id == id.toString()) {
                isZero = false;
            }
            return id.toString();
        });
        if (!isZero) {
            return (<QuantityControl item={CartItems[product.id]} variant="gray"/>);
        } else {
            return (
                <a className="product__add" onClick={this.onClick.bind(this,product)}>
                    <img className="product__add__icon" src="img/cart-icon.svg"/>
                </a>
            );
        }
    }

    render() {

        let {name,price,imagePath} = this.props.product;

        return (
            <div className="product">
                <div className="product__display">

                    <div className="product__img-wrapper">
                        <img className="product__img" src={imagePath}/>
                    </div>

                    {this.renderQuantity(this.props.product, CartStore.getCartItems())}

                    <div className="product__price">
                        ${price}
                    </div>
                </div>

                <div className="product__description">
                    <div className="product__name">
                        {name}
                    </div>

                    <img className="product__heart" src="img/heart.svg"/>
                </div>
            </div>
        );
    };
}

module.exports = Products;
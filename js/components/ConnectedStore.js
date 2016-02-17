/**
 * Created by yqq on 2016.2.17.
 */
const React = require("react");
//const cartItems = require("../data.js").cartItems;
//const CartStore = require("../stores/CartStore.js");
//const cartItems = CartStore.getCartItems();
//const {deleteCartItem} = CartStore;
//const Cart = require("./Cart.js");
//const products = require("../data.js").products;


class ConnectedStore extends React.Component {

    render() {
        // `children` 属性是一个函数。
        let contentRenderFunction = this.props.children;
        let store = this.props.store;
        let propNames = this.props.propNames;

        // 1. 从 Store 中读取并调用对应的函数。
        // 2. 给 `contentRenderFunction` 传递数据。



        return contentRenderFunctions(storeProps);
    }
}

module .exports = ConnectedStore;

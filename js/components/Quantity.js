const React = require("react");
const {updateCartItemQuantity} = require("../stores/CartStore.js");

class QuantityControl extends React.Component{

    sub(item,e){
        updateCartItemQuantity.bind(item.name,item.quantity-1);
    }

    render() {
        let item = this.props.item;

        //if ("gray" == this.props.variant) {
            return (
                <div className="adjust-qty adjust-qty--gray">
                    <a className="adjust-qty__button" onClick={updateCartItemQuantity.bind(this,item.id,item.quantity-1)}>-</a>
                    <div className="adjust-qty__number">{item.quantity}</div>
                    <a className="adjust-qty__button" onClick={updateCartItemQuantity.bind(this,item.id,item.quantity+1)}>+</a>
                </div>
            );
        //} else {
        //    return (
        //        <div className="adjust-qty">
        //            <a className="adjust-qty__button" onClick={this.sub.bind(this,item)}>-</a>
        //            <div className="adjust-qty__number">{item.quantity}</div>
        //            <a className="adjust-qty__button" onClick={this.sub.bind(this,item)}>+</a>
        //        </div>
        //    );
        //}

    }
}

module.exports = QuantityControl;

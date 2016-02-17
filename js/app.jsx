//const Ps = require("../node_modules/perfect-scrollbar/index");
//const React = require("../node_modules/react/react");

const React = require("react");
const SiteTitle = require("./components/setTitle.js");
const Products = require("./components/Products.js");
const Cart = require("./components/Cart.js");
const Checkout = require("./components/Checkout.js");

window.onload = () => {
    showRightSideBar();
    React.render(<SiteTitle/>,document.querySelector(".title"));
    React.render(<Products/>,document.querySelector(".products"));
    React.render(<Cart/>,document.querySelector(".cart__content"));
    React.render(<Checkout/>,document.querySelector(".checkout"));
};

function showRightSideBar(){
    var $toggle = document.querySelector(".site__right-sidebar-toggle");
    $toggle.addEventListener("click",function() {
        document.body.classList.toggle("js-show-right-sidebar");
    });
}




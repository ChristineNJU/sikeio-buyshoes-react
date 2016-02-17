const React = require("react");

let SiteTitle = React.createClass({
    render(){
        return(
            <div class="img_bg">
                <h2>Buy Me Shoes</h2>
                <img class="title__heart" src="img/heart.svg"/>
            </div>
        );
    }
});

module.exports = SiteTitle;

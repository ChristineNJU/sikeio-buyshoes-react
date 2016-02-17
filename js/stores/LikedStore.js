const EventEmitter = require("events");

let emitter = new EventEmitter();

let _LikedItems = [
    "jameson-vulc"
];

module.exports = {
    likedItems(){
        return _LikedItems;
    },

    getLikedItems(){
        return _LikedItems;
    },

    toggleItem(){

    }
};

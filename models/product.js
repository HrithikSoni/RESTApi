const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    featured: {
        type: Boolean,
        default: true,
    },

    company: {
        type: String,
        enum:{
            values: ["apple", "samsung", "mi", "motorola", "oppo","dell"],
            message: `{VALUE} is not supported`,
        }
    },
});


module.exports = mongoose.model("Product", ProductSchema);
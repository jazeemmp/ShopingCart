const mongoose = require("mongoose");
const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductDB",
      }
    },
  ],
});

const WishlistDB = mongoose.model('wishlist',wishlistSchema)

module.exports = WishlistDB;
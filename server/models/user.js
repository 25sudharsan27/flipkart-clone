const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
  rate: Number,
});

const CategorySchema = new mongoose.Schema({
  name: String,
  products: [ProductSchema],
});

const SliderSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const UserSchema = new mongoose.Schema(
{
  categories: [CategorySchema],
  imgslider: [SliderSchema],
  productcat: [CategorySchema],
}
);

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;

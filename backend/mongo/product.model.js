// kết nối collection categories

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
  name: { type: String, require: true },
  img: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },

  category: {
    type: {
      categoryId: { type: ObjectId, require: true },
      categoryName: { type: String, require: true },
    },
    require: true,
  },
  hot: { type: Number, require: false },
  view: { type: Number, require: false },
  description: { type: String, require: true },
});

module.exports = mongoose.models.pros || mongoose.model("pros", productSchema);
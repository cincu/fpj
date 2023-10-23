import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  user_id: String,
  order_price: Number,
  order_id: String,
  order_addres: String,
});

const Order = mongoose.model("Order", orderSchema);
export default Order;

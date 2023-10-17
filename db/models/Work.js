import mongoose from "mongoose";

const { Schema } = mongoose;

const workSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, require: false },
  dateOfTattoo: { type: Number, require: false },
  availableForms: { type: String, require: false },
  category: { type: String, require: true },
  imageUrl: { type: String, require: true },
});

const Work = mongoose.models.Work || mongoose.model("Work", workSchema);

export default Work;

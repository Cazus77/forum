import mongoose from "mongoose";

const Topic = new mongoose.Schema({
  author: { type: String, require: true },
  topic: { type: String, require: true },
  text: { type: String, require: true },
  createData: { type: Date, default: new Date() },
});

export default mongoose.model("Topic", Topic);

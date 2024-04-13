import mongoose from "mongoose";
mongoose.connect("mongodb://0.0.0.0:27017/")
.then(() => {
  console.log("MongoDB connected");
})
.catch(() => {
  console.log("Failed to connect");
})

const wordwizSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
})

const wordwiz = mongoose.model("wordwiz", wordwizSchema);

export default wordwiz

var mongoose = require("mongoose");

//Mongoose/Model Config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  category: {
    type: String,
    enum: [
      "Cricket",
      "Machine Learning",
      "Web Development",
      "Table Tennis",
      "Movies",
    ],
  },

  date: { type: Date, default: Date.now },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});
var Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

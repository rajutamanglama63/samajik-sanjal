const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    ownerOfPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    caption: {
      type: String,
      required: true,
    },
    image: {
      url: String,
      public_id: String,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    comments: [
      {
        commenter: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);

module.exports = Post;

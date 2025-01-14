import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema ({
    title: {
        type: String,
        required: [true, "Title is required"],
        min: [10, "Title must be at least 10 characters"],
        max: [500, "Title must be at most 500 characters"],
    },
    slug: {
        type: String,
        trim: true,
        lowercase: true,
        updatetable: false,
    },
    content: {
        type: String,
        required: [true, "Content is required"],
    },
    thumbnail: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
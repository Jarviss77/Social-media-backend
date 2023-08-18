import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
        userId : {
            type: String,
            required: true,
        },
        FirstName : {
            type: String,
            required: true,
        },
        LastName : {
            type: String,
            required: true,
        },
        PicturePath : String,
        location : String,
        description: String,
        likes: {
            type: Array,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: [],
        }
    },
    {timestamps: true}
);

const Post = mongoose.model("Post", postSchema);

export default Post;

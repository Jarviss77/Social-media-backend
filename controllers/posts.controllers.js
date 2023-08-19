import Post from '../models/posts.models.js';
import Story from '../models/story.models.js';
import { io } from '../app.js';

export const CreatePost = async (req, res) => {
    try{
        const {userId, description, PicturePath} = req.body;
        const user = await User.findById(userId);
        const newpost = new Post ({
            userId, 
            FirstName: user.FirstName,
            LastName: user.LastName,
            location: user.location,
            description,
            userPicturePath: user.PicturePath,
            PicturePath,
            likes: {},
            comments: [],

        })

        await newpost.save();

        const post = await Post.find();

        io.emit("NewPost", newpost);

        res.status(201).json(post);
    }
    catch(error){
        res.status(409).json({message: error.message});
    }
}

export const GetFeedPosts = async (req, res) => {
    try{

        const post = await Post.find();


        res.status(200).json(post)
    } 
    catch(error){
        res.status(404).json({message: error.message});
    }
}

export const GetUserPosts = async (req, res) => {
    try{

        const {id} = req.params;
        const post = await Post.find({userId: id});

        res.status(200).json(post)
    } 
    catch(error){
        res.status(404).json({message: error.message});
    }


}

export const LikePost = async (req, res) => {
    try{
        const {id} = req.params;
        const {userId} = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if(isLiked){
            post.likes.delete(userId);
        }
        else{
            post.likes.set(userId, true);

            io.emit("LikePost", post);
        }

        const updatedPost = await post.findByAndUpdate(
            id, 
            {likes: post.likes},
            {new: true}
            );


        res.status(200).json(updatedPost);
    }
    catch(error){

        res.status(404).json({message: error.message})
    }

}

export const AddComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, commentText } = req.body;

        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        const newComment = {
            userId,
            commentText,
        };

        post.comments.push(newComment);
        await post.save();

        io.emit("NewComment", post);

        res.status(201).json(newComment);
    } 
    catch (error){
        res.status(500).json({ message: error.message });
    }
};

export const CreateStory = async (req, res) => {
    try{
        const { userId, Content} = req.body;
        const Story = new Story({
            userId,
            Content,
        });

        await Story.save();

        io.emit("NewStory", Story);

        res.status(201).json(Story);
    }
    catch (error){
        res.status(409).json({message: error.message});
    }
}

export const GetStories = async (req, res) => {
    try {
        const stories = await Story.find({ExpireIn: {$gt: Date.now()}});

        res.status(200).json(stories);
    }
    catch (error){
        res.status(404).json({message: error.message});
    }
}

import express from 'express';
import { 
    CreatePost,
    GetFeedPosts, 
    GetUserPosts, 
    LikePost,  
    AddComment, 
    CreateStory, 
    GetStories
} from '../controllers/posts.controllers.js';
import { verifyToken } from '../middleware/auth.middleware.js';
import { uploadimage , uploadContent} from '../middleware/file.middleware.js';


const router = express.Router();

router.get("/", verifyToken, GetFeedPosts);
router.post("/", verifyToken, uploadimage, CreatePost);
router.get("/:userId/posts", verifyToken, GetUserPosts);
router.post("/stories", verifyToken, uploadContent, CreateStory);
router.get("/stories", verifyToken, GetStories);

router.patch("/:id/like", verifyToken, LikePost);
router.patch("/:id/comment", verifyToken, AddComment);


export default router;
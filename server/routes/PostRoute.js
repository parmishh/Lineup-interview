import express from 'express'
import { createPost, deletePost, emoji,emoji1,  getPost, getTimelinePosts, likePost, updatePost } from '../controllers/PostController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js'
const router = express.Router()

router.post('/',createPost)
router.get('/:id', getPost)
router.put('/:id/update', updatePost)
router.delete('/:id/delete', deletePost)
router.put('/:id/like', likePost)
router.put('/:id/emojie', emoji)
router.put('/:id/emojie1', emoji1)

router.get('/:id/timeline', getTimelinePosts)

export default router
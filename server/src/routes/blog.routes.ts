import { Router } from 'express';
import { createBlogController, getBlogsController } from '~/controllers/blog.controller';

const blogsRouter = Router();

blogsRouter.get('/', getBlogsController);

blogsRouter.post('/', createBlogController);

export default blogsRouter;

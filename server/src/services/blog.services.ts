import BlogModel, { Blogs } from '~/models/schemas/blog.schema';

class BlogsService {
  async createBlog(blog: Blogs) {
    return await BlogModel.create(blog);
  }

  async getBlogs() {
    return BlogModel.aggregate([
      {
        $lookup: {
          from: 'users',
          localField: 'userID',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $unwind: '$user'
      }
    ]);
  }
}

const blogsService = new BlogsService();
export default blogsService;

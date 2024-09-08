import BlogsModel, { Blogs } from '~/models/schemas/blog.schema';

class BlogsService {
  async createBlog(blog: Blogs) {
    return await BlogsModel.create(blog);
  }

  async getBlogs() {
    return BlogsModel.aggregate([
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

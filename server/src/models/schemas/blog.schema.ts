import mongoose, { Types } from 'mongoose';

export interface Blogs {
  title: string;
  description: string;
  userID: Types.ObjectId;
}

const BlogsSchema = new mongoose.Schema<Blogs>(
  {
    title: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: '',
      maxlength: 1000
    },
    userID: {
      type: mongoose.Schema.ObjectId,
      ref: 'users',
      required: true
    }
  },
  {
    timestamps: true,
    collection: 'blogs'
  }
);

const BlogModel = mongoose.model('blogs', BlogsSchema);
export default BlogModel;

// Assuming your Blog schema looks something like this
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  markdown:String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Other blog fields
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;

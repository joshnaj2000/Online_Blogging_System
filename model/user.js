// Assuming your User schema looks something like this
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  // Other user fields
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],
  
  selectedTopics: {
    type: [String], // Assuming topics are represented as strings
  },
});





const User = mongoose.model('User', userSchema);
module.exports = User;

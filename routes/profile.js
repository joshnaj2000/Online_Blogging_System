// // const express = require("express")
// // const app = express()

// // const router = express.Router()

// // router.get('/' ,(req,res)=>{
// //     res.render('profile')
// // })



// // // Assuming you have a route handler like this
// // app.get('/profile', (req, res) => {
// //   // Assuming you have some logic to fetch articles from a database or elsewhere
// //   const articles = fetchArticlesSomehow(); // You need to implement this function

// //   // Render the 'profile.ejs' template and pass the 'articles' variable
// //   res.render('profile', { articles });
// // });



// // Assuming you have a route for /profile in your server.js or routes/profile.js file

// // const express = require('express');
// // const router = express.Router();
// // const Article = require('../model/article'); // Import the Article model

// // router.get('/profile', async (req, res) => {
// //   try {
// //     // Assuming you want to fetch all articles for the profile page
// //     const articles = await Article.find();
// //     res.render('profile', { articles: articles });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });



// // routes/profile.js

// const express = require('express');
// const router = express.Router();
// const Article = require('../model/article'); // Import the Article model

// // router.get('/', async (req, res) => {
// //   console.log('Reached /profile route');
// //   try {
// //     const articles = await Article.find();
// //     res.render('profile', { articles: articles });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Internal Server Error');
// //     res.redirect('/new');
// //   }
// // });




// router.get('/', async (req, res) => {
//   console.log('Reached /profile route');
//   try {
//     const articles = await Article.find();
//     res.render('profile', { articles: articles });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//     // Redirect on the client side using JavaScript
//     res.send('<script>window.location="/new";</script>');
//   }
// });


// module.exports = router;




// In your routes/profile.js file
const express = require('express');
const router = express.Router();
const User = require('../model/user');
const Blog = require('../model/blog');

// router.get('/:userId', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId).populate('blogs');
//     res.render('/articles/profile', { user });
//   } catch (error) {
//     console.error(error);
//   //  res.render('error', { message: 'Error loading profile' });
//   }
// });



router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log('User ID:', userId);

    // Example: Using 'Blog'
    const blogs = await Blog.find({ userId }); // Assuming 'userId' is a field in your Blog model
    console.log('User Blogs:', blogs);

    const user = await User.findById(userId).populate('blogs');
    res.render('articles/profile', { user });
  } catch (error) {
    console.error(error);
   // res.render('error', { message: 'Error loading profile' });
  }
});

module.exports = router;




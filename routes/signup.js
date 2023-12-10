// const express = require("express")
// const app = express()

// const router = express.Router()

// router.get('/' ,(req,res)=>{
//     res.render('signup')
// })

// module.exports = router


// const express = require('express');
// const app = express();
// const router = express.Router();

// // GET route for rendering the signup form
// router.get('/', (req, res) => {
//     res.render('signup'); // Assuming you have a signup.ejs file in your views folder
// });

// // POST route for handling form submissions
// router.post('/', (req, res) => {
//     // Handle form submission logic here (e.g., save to database)
//     console.log('Form submitted:', req.body);

//     // Redirect or render a response as needed
//     res.redirect('/topics.ejs'); // Redirect to home page for example
// });

// module.exports = router;




// signupRouter.js

const express = require('express');
const router = express.Router();
const Signup = require('./../model/signupmodel');



router.get('/', (req, res) => {
    res.render('signup'); 
});
// Route for handling form submissions
// Route for handling form submissions
router.post('/', async (req, res) => {
    try {
        const newSignup = new Signup({
            fname: req.body.fname, // Include the 'fname' field
            lname:req.body.lname,
            email: req.body.email, // Include the 'email' field
            password: req.body.password, // Include the 'password' field
            // Add other fields as needed      
        });

        await newSignup.save();
        console.log('Form submitted and data saved to MongoDB:', newSignup);

        // Redirect or render a response as needed
        res.redirect('/topics'); // Redirect to the home page, for example
    } catch (error) {
        console.error('Error saving data to MongoDB:', error);

        // Handle the error and render an appropriate response
      //  res.render('error', { message: 'Error saving data to the database' });
    }
});




// // Route for handling form submissions
// router.post('/', (req, res) => {
//     // Handle form submission logic here (e.g., save to database)
//     console.log('Form submitted:', req.body);

//     // Redirect or render a response as needed
//     res.redirect('/topics'); // Redirect to the home page, for example
// });

module.exports = router;




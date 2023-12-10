// const express = require("express")

// const Signin = require('./../model/signinmodel');

// const router = express.Router()

// router.get('/signin' ,(req,res)=>{
//     res.render('signin')
// })




// // Route for handling form submissions
// router.post('/signin', (req, res) => {
//     // Handle form submission logic here (e.g., save to database)
//     console.log('Form submitted:', req.body);

//     // Redirect or render a response as needed
//    // res.redirect('/topics'); // Redirect to the home page, for example
// });




// // router.post('/', async (req, res) => {
// //     try {
// //         const newSignin = new Signin({
// //             email: req.body.email, // Include the 'email' field
// //             password: req.body.password, // Include the 'password' field
// //             // Add other fields as needed
// //         });

// //         await newSignin.save();
// //         console.log('Form submitted and data saved to MongoDB:', newSignin);

// //         // Redirect or render a response as needed
// //         res.redirect('/articles/index'); // Redirect to the home page, for example
// //     } catch (error) {
// //         console.error('Error saving data to MongoDB:', error);

// //         // Handle the error and render an appropriate response
// //       //  res.render('error', { message: 'Error saving data to the database' });
// //     }
// // });






// module.exports = router



const express = require("express");
const Signin = require('./../model/signinmodel');
const router = express.Router();

// Route for rendering the sign-in form
router.get('/', (req, res) => {
    res.render('signin');
});

// Route for handling form submissions
router.post('/', async (req, res) => {
    try {
        // Assuming you have a model named 'Signin' for handling sign-in data
        const newSignin = new Signin({
            email: req.body.email,
            password: req.body.password,
            // Add other fields as needed
        });

        // Save the data to MongoDB
        await newSignin.save();
        console.log('Form submitted and data saved to MongoDB:', newSignin);

        // Redirect or render a response as needed
        res.redirect('/articles/index'); // Redirect to the home page, for example
    } catch (error) {
        console.error('Error saving data to MongoDB:', error);

        // Handle the error and render an appropriate response
      //  res.render('error', { message: 'Error saving data to the database' });
    }
});

module.exports = router;

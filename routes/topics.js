const express = require("express")
const app = express()

const router = express.Router()

router.get('/' ,(req,res)=>{
    res.render('topics')
})


// Route for handling form submissions
router.post('/', (req, res) => {


    // Redirect or render a response as needed
    res.redirect('/articles'); 
});


module.exports = router
require('dotenv').config();
const express = require("express")
const app = express()
const Article = require('./model/article')
const methodOverride = require('method-override')
const path = require('path');



app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))







const connectDB = require('./config/db');
 connectDB();



// Route for the root URL
// app.get('/', (req, res) => {
//     res.render(path.join(__dirname, 'views', 'articles', 'index'));
// });


app.get('/',(req,res)=>{
    res.render('home')
})

// app.get('/articles', (req, res) => {
//     res.render(path.join(__dirname, 'views', 'index'));
// });



app.use(express.static("public"))

const articlesRouter = require("./routes/articles");
// app.use("/articles", articlesRouter);
app.use('/articles', articlesRouter)


const aboutRouter = require("./routes/about")
app.use("/about", aboutRouter)
const contactRouter = require("./routes/contact")
app.use("/contact", contactRouter)
const signinRouter = require("./routes/signin")
app.use("/signin", signinRouter)
const signupRouter = require("./routes/signup")
app.use("/signup", signupRouter)
const bloggingRoute = require("./routes/blogging")
app.use("/blogging", bloggingRoute)
const topicsRoute = require("./routes/topics")
app.use("/topics", topicsRoute)
// const profileRouter = require("./routes/profile")
// app.use("/profile", profileRouter)

const profileRouter = require('./routes/profile');

app.use('/profile', profileRouter);



app.listen(5000)
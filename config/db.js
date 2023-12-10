// const mongoose = require('mongoose');
// const connectDB = async () =>{

//     try {
//         mongoose.set('strictQuery',false);
//         const conn = await mongoose.connect(process.env.MONGODBURI );
//         console.log("database connected :   ${conn.connection.host}");
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = connectDB;

// const mongoose = require('mongoose');
// const connectDB = async () => {
  
//   try {
//     mongoose.set('strictQuery', false);
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`Database Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log(error);
//   }

// }

// module.exports = connectDB;


// db.js

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://joshnaj123:joshnaj123@onlineblogging.6imzvkr.mongodb.net/'; // Make sure this is defined

const connectDB = async () => {
  try {
    await
     mongoose.connect(MONGODB_URI, 
      {
      //  useNewUrlParser: true,
      //  useUnifiedTopology : true,
      // useCreateIndex:true
    }
    );
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectDB;

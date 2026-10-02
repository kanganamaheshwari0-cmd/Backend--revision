// const mongoose = require("mongoose")

// const connectDB = async () => {
//     try{
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log("mongoDB connected successfully")

//     } catch (error) {
//         console.log(error)
//     }

// }

// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB
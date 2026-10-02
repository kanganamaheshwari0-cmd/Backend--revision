// require("dotenv").config();

// const app = require("./app")

// const connectDB = require("./src/db");

// connectDB();

// app.listen(8080, () => {
//     console.log("Server is running on port 8080")
// })


require ("dotenv").config();

const app = require("./app")

const connectDB = require("./src/db");

connectDB()

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})
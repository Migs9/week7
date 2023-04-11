// const express = require("express") // step 1
// const app = express()   // step 2

// app.use("/books", express.static("books")) //step 4 - this sets what the URL should be
// app.use("/", express.static("anotherroute")) // step 5

// app.listen(5001, () => console.log("Server is listening")) // step 3

// // step 4 - - - - type - - - node src/server.js
// // returns the message in console.log

// ---- - - - - - - -- - -- - - --

const express = require("express") 
const app = express()   

app.use("/pages", express.static("pages"))
app.use("/pages/base", express.static("pages")) 
app.use("/pages/movies", express.static("pages"))
app.use("/pages/about", express.static("pages"))



app.listen(5001, () => console.log("Server is listening")) 

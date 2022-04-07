const express = require("express")

const app = express()


// Set server port
const port = process.env.port || 4005


// Rollbar installation


app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Server is rocking on port ${port}`)
})

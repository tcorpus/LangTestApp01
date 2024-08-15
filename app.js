const express = require("express");
const os =require ("os")
const app = express()

app.use('/',async (req, res) => {
  console.log(`I am sending a repsonse to ${os.hostname()}`)
  res.json({message: "works", hostname: os.hostname()})
})
app.listen(3000, ()=> console.log("server on port 3000"))
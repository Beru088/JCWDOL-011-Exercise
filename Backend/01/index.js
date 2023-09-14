const express = require("express")
const axios = require("axios")
const app = express()
const PORT = 8000

app.use(express.json())
const serviceRouter = require("./routers/serviceRouter")

app.use("/", serviceRouter)
app.use("/search", serviceRouter)

app.listen(PORT, () => {
  console.log("server started on port", PORT)
})

require("dotenv").config();
const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000
const authRoute = require("./router/auth-router")
const contactRoute = require("./router/auth-contact")
const ServiceRoute = require("./router/route-service")
const connectDb = require('../Server/utils/db');
const AdminRoute = require("./router/Admin-router")
const errorMiddleware = require('./Middleware/errror-middleware')
const corsOptions = {
  origin: ["http://localhost:5173","http://localhost:5174"],
  methodS:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credential:true
}

app.use(express.json());
app.use(cors(corsOptions))

app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)
app.use("/api/data", ServiceRoute)
app.use("/api/admin", AdminRoute)

app.use(errorMiddleware)
connectDb().then(() => {

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
})

const express = require('express')
const app = express()

//cors
const cors = require('cors')
app.use(cors())

//dotenv
require('dotenv').config()

//db
const connect = require('./config/db')

//json
app.use(express.json())


//routes
const {registerUser, authUser} = require('./controllers/userController')
const { protect } = require('./middleware/auth')


app.get("/" , protect , (req,res)=>{
    res.send({statue:"ok"})
})
app.post("/signup" , registerUser)
app.post("/login" , authUser)



app.listen(process.env.PORT , async ()=>{
    console.log("App is listning at " , process.env.PORT)

    await connect
    console.log("Connected to DB..")

})
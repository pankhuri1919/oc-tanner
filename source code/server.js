require('dotenv').config()
const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')
const userRouter=require('./routes/userRouter')
const noteRouter=require('./routes/noteRouter')

const app=express()

app.use(express.json())
app.use(cors())

//routes
app.use('/users',userRouter)
app.use('/api/notes',noteRouter)


//listening on the port
const PORT =process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
})

//connect to mongodb
const URI=process.env.MONGODB_URL
mongoose.connect(URI,{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true

},err=>{
    if(err) throw err;
    console.log('Connected to MongoDb')
})
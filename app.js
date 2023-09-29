const express=require('express');
const Router = require('./router/contactRoute');
const morgan=require('morgan')
const mongoose=require('mongoose')
const errorHandler = require('./middleware/errorHandler');
const app=express();
const dotenv=require('dotenv').config();
const bodyparser=require('body-parser');
const cors=require('cors');



app.use(cors());
app.use(express.json());
const port=process.env.PORT||3000;
app.use(morgan('dev'));
app.use(bodyparser.json({ limit: '2mb' }));
// app.use(bodyparser.urlencoded({extended:true}));
app.use('/api',Router);
app.use('/user',require('./router/userRoute'))
app.use('/user',require('./router/serviceRout'))
app.use('/user',require('./router/productRoute'))
app.use('/user',require('./router/costomerRout'))
app.use('/user',require('./router/supplyRout'))
app.use(errorHandler);

const db=process.env.DB_URL.replace('<password>',process.env.DB_PASSWORD);
mongoose.set('strictQuery', false);
mongoose.connect(db,  {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log('DB connection is successfull!');
}).catch(err=>console.log(err));

app.listen(port,()=>{
  console.log(`app is running on ${port}`);
})
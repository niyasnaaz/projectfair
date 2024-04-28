const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("MongoDB Atlas Successfully Connected With PfServer");
}).catch((err)=>{
    console.log(`MongoDB Connection Failed!! error:${err}`);
})
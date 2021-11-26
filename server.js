const app=require('./app');
const mongoose=require('mongoose');
const port=3000;

mongoose.connect(process.env.MONGOURL, {useNewUrlParser: true, useUnifiedTopology: true,autoIndex: true}).then(() => {
    console.log('MongoDB Connection Established..!!');
}).catch(err => {
    console.log('Connection Failed..!!', err);
});


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
const mongoose=require('mongoose');

const geoCoder=require('../utils/geocoder')

const webSchema= new mongoose.Schema({
    address:{
        type:String,
        trim:true
    },
    pin:{
        type:String,
        minlength:[6,"pin must be of atleast 6 digit"],
    },
    phone:{
        type:String,
        minlength:[10,"Phone number must be of 10 digit"],
        maxlength:[10,"Phone number must be of 10 digit"],
        trim:true
    },
    location: {
        type: {
          type: String, 
          enum: ['Polygon'], 
        
        },
        coordinates: {
          type: [[[Number]]],
          index:'2dsphere',
        },
        formattedAddress:String

      }
},

{
    timestamps:true
});


//GeoCoder & create location
webSchema.pre('save', async function(next){
    let data=JSON.parse(localStorage.getItem('coordinates'));
   
    // const loc =await geoCoder.geocode(this.address);
    this.location={
        type:'Polygon',
        coordinates:data,

    }
    next();
});

const formData=mongoose.model('form',webSchema);

module.exports=formData;


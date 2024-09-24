const mongoose =require("mongoose")

 const connectDB= async()=>{

    await mongoose.connect( "mongodb+srv://sy979514:ESRBr7wHLGMMxctD@namastenodejs.e8gfx.mongodb.net/?retryWrites=true&w=majority&appName=namasteNodeJs")

}

module.exports=connectDB; 
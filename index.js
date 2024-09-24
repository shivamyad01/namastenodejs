const express= require('express')
const app = express()
const connectDB=require("./src/config/db")
const User = require("./src/models/userModel")
// Middleware to parse JSON body
app.use(express.json());


app.post("/signup",async (req,res)=>{
    // const { firstName, lastName, emailId, password } = req.body;
      
    //   const userObj = {
    //     firstName: firstName.trim(),
    //     lastName: lastName.trim(),
    //     emailId: emailId.trim(),
    //     password: password
    // };
    

      //createg new instance
        const user= new User(req.body)
       await user.save()
       res.send("user add successfully")
       console.log(user);
       
})


app.get("/getdata",async (req,res)=>{
 
    try {
        const userdata = await User.find();
        res.json(userdata);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
   
       
})

connectDB().then(()=>{
    console.log("db is connected");
    app.listen(3000,()=>{
        console.log("server is running on port ",3000);
        
    })
    
}).catch(()=>{
  console.log("db is not connedt");
  
})


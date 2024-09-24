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




  app.patch("/updateUser",async (req,res)=>{
    const {userId,firstName}=req.body
   
    
    try {
        await User.findByIdAndUpdate(userId,{firstName});

       res.send("user updated successfully")
      } catch (err) {
        console.log(err)
      }
 
})



app.delete("/deleteUser",async (req,res)=>{
          const userId=req.body.userId
    try {
        
       const user= await User.findByIdAndDelete(userId);
           res.send("user deleted successfuly")
        
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


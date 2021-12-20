const { request, response } = require('express');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT =process.env.PORT || 2021;
//importing mongoose
const mongoose = require('mongoose');
//importing userController
const userController = require('./controllers/usercontroller')

app.use(express.json());
app.get('/',(request,response)=>{
    response.status(200).json({message:'Hello welcome to Jeffery node_api'});
});

app.post('/user',userController.adduser);
app.get('/user',userController.getAlluser);
// app.put('/user/userId',userController.updateById);
app.patch('/user/:userId',userController.updateById);
app.delete('/user/:userId',userController.deleteById);
app.get('/user/:userId',userController.getuserById);

//listening to request on localhost port 1489
app.listen(PORT,() => {
    console.log("My server is Up and running on port:");
    //connecting to the database
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("DataBase is Connected");
    })
    .catch(function(error){
        console.log("DataBase is not Connected",error.message);
    });
});


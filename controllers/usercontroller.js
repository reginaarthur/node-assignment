const userModel = require('../models/usermodel');

async function adduser(request,response){
   try {
      const newuser =await userModel.create(request.body); 
      response.status(200).json(newuser);
   } catch (error) {
     console.log('something went wrong',error.message);  
   }
}

async function getAlluser(request,response){
   try {
      const getAll =await userModel.find(); 
      response.status(200).json(getAll);
   } catch (error) {
     console.log('something went wrong',error.message);
     response.status(400)  
   }
}

async function getuserById(request,response){
   try {
      const get1user =await userModel.findById(request.params.userId); 
      response.status(200).json(get1user);
   } catch (error) {
     console.log('something went wrong',error.message); 
   }
}
   async function updateById(request,response){
   try{
      const updateId=await userModel.findByIdAndUpdate(request.params.userId,request.body);
      response.status(200).json(updateId);
   }
   catch(error){
      console.log('something went wrong',error.message); 
   }
}

async function deleteById(request,response){
   try{
      const deleteId = await userModel.findByIdAndDelete(request.params.userId);
      response.status(200).json(deleteId);
   }catch(error){
      console.log('something went wrong',error.message); 
   }
}

module.exports={
    adduser,
    getAlluser,
    updateById,
    deleteById,
    getuserById
}
const User = require('../models/Users');

exports.createUser = async function(req, res ){
    const formData = req.body.formData;
    try{
        const user = new User(formData);
        await user.save();
        res.status(200).json({message : 'User created successfully'})
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'User creation failed'});
    }
}

exports.getUsers = async(req, res)=>{
    try{
        const users = await User.find();
        if(users){
            res.status(200).json(users);
        }else{
            res.status(404).json({message : 'User not found'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({message : 'Error in getting users'});
    }
}

exports.getUser = async(req, res)=>{
    const {email} = req.params;
    console.log(req.params);
    try{
        const user = await User.findOne({email: email});
        if(user){
            res.status(200).json(user);
        }else{
            res.status(404).json({message : 'User not found'});
        }
    }catch(e){
        console.error(e)
        res.status(500).json({message : 'Something went wrong'})
    }
}
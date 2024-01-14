

const UserModel = require('./user.model');

exports.getUser = (req, res, next) => {

    UserModel.find().then((user) => {
        res.status(200).json({
            user: user,
        });
    }).catch((err) => {
        res.status(500).json({
            error: err,
        });
    });

};

exports.createuser = (req, res, next) => {
    const newuser = new UserModel({ 
        firstName: req.body.firstName,
        lastName: req.body.lastName });
    newuser
    .save()
    .then((result) => { 
        res.status(201).json({
            user: result
        });
    })
        
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

exports.getUserById = (req, res, next) => {
    UserModel.findById(req.params.id).then((result) => {
        res.status(200).json(result);
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
};

exports.deleteUserById = (req, res, next) => {
    UserModel.findByIdAndDelete(req.params.id).then((result)=>{
        if(result){
        res.status(200).json(result);
        }else{
            res.status(200).json({msg: 'user not found'});  
        }
    })
    .catch(err => {
        res.status(404).json({
            error: err
        });
    });
};


exports.updateUserById =(req,res,next) =>{
    UserModel.findByIdAndUpdate(req.params.id).then((result)=>{
        res.status(200).json(result);
    })
    .catch(err =>{
        res.status(404).json({
            error: err

    });
});
};
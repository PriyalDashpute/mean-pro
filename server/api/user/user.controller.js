const UserModel = require ('./user.model');

exports.registerUser = async (req, res, next) => {
    try {
        // console.log('here in reg user');
        const existingsUser = await UserModel.findOne({ email: req.body.email });
        console.log(existingsUser);
        if (existingsUser) {
            return res.status(400).json({
                message: 'User already registered'
            });
        } else {
            const newUser = await new UserModel({ email: req.body.email, password: req.body.password });
            const result = await newUser.save();
            res.status(201).json({ message: 'User successfully registered' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}
exports.login = async (req, res, next) => {
 try{
     const existingsUser = await UserModel.findOne({ email: req.body.email,passward: req.body.passward});
if(existingsUser){
    return res.status(200).json
    ({ message :"Login user succesfull" });
}
else{
    res.status(403).json ({ message :'invalid user'});
}
} catch (error){
    res.status(500).json({
        error:error
    });
}
}

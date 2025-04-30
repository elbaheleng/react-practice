//register
exports.registerController = (req,res) =>{
    //logic
    const {username, email, password} = req.body
    console.log(username, email, password);
    res.status(200).json('request received')

}
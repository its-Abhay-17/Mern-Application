const AdminMiddleware = async(req,res,next)=>{
    try {
        console.log(req.user)
        res.status(200).json({Message:req.user.IsAdmin})
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = AdminMiddleware
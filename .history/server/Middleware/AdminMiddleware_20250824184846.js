const AdminMiddleware = async(req,res,next)=>{
    try {
        console.log(req.user)
    } catch (error) {
        next(error)
    }
}

module.exports = AdminMiddleware
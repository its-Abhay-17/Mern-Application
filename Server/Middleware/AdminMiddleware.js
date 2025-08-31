const AdminMiddleware = async(req,res,next)=>{
    try {
        const AdminRole = req.user.IsAdmin
        if (!AdminRole) {
            return res.status(404).json({message:"Access Denied, User is not Amdin"})
        }        
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = AdminMiddleware
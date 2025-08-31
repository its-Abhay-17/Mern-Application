const validate = (schema) => async (req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (error) {
        console.log(error)
        const message = error.ZodError.message
        res.status(404).json({message: message})
    }
}

module.exports = validate
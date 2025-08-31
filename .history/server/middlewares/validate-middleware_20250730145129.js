const validate = (schema) => async (req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        const message = err.issues[0].message
        console.log(message)
        res.status(404).json({message: message})
    }
}

module.exports = validate
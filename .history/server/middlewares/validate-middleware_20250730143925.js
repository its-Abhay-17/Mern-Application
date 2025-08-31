const validate = (schema) => async (req,res,next) =>{
    try {
        const parseBody = await schema.parsAsync(req.body)
        req.body = parseBody
        next()
    } catch (error) {
        res.status(404).json({message: "Validatio Failed"})
    }
}

module.exports = validate
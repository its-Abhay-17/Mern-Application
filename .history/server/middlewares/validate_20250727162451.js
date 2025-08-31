
const validate =(schema) => async(req,res,next) =>{
    try {
        const parseBody = await schema.paraAsync(res.body);
        req.body = parseBody
        next()
    } catch (error) {
       res.status(400).json({msg:"validation failed"})
    }
}

module.exports = validate;
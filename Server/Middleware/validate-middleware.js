const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        const status = 422
        const message = "fill the input properly"
        const extraDetails = err.issues?.[0]?.message || err.message || "Validation failed";


        const error = {
            status,
            message,
            extraDetails
        }

        console.log(error)
        // res.status(404).json({msg : message})
        next(error)
    }
}

module.exports = validate
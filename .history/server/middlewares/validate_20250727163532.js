
const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(res.body);
        req.body = parseBody
        next()
    } catch (err) {
        const message = err.error[0].message;
        console.log(message)
        res.status(400).json({ msg: message })
    }
}

module.exports = validate;
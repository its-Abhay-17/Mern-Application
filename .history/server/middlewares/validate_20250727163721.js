
const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(res.body);
        req.body = parseBody
        next()
    } catch (error) {
        res.status(400).json({ msg: message })
    }
}

module.exports = validate;
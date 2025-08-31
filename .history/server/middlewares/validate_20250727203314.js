const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body); 
        req.body = parseBody;
        next();
    } catch (error) {
        return res.status(400).json({ 
            errors: error.errors.map(err => err.message) 
        });
    }
};

module.exports = validate;

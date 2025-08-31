const { ZodError } = require("zod");

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body); // FIXED: req.body
        req.body = parseBody;
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                errors: error.errors.map(err => err.message)  // Extract validation messages
            });
        }

        // If it's some other error, return generic
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = validate;


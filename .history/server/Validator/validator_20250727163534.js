const { z } = require("zod");

//creating an object

const signupSchema = z.object({
    username: z
        .string({ require_error: "Name is requires" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters." })
        .max(50, { message: "Name must be not more than 50 characters." }),

        email: z
        .string({ require_error: "email is requires" })
        .trim()
        .email({message: "Invalid eamil address"})
        .min(5, { message: "email must be at least 5 characters." })
        .max(20, { message: "email must be not more than 20 characters." }),

        phoneNumber: z
        .string({ require_error: "Phone Number is requires" })
        .trim()
        .min(10, { message: "Phone Number must be at least 10 digits." })
        .max(10, { message: "Phone Number only 10 digits." }),

        password: z
        .string({ require_error: "password is requires" })
        .trim()
        .min(8, { message: "password must be at least 8 characters." })
        .max(20, { message: "Name must be not more than 20 characters." })

});

module.exports = signupSchema;
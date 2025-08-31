const { z } = require("zod")

//Creating an object schema

const signupschema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 character." })
        .max(50, { message: "Name not be more than 50 characters." }),

    email: z
        .string({ required_error: "email is required" })
        .trim()
        .min(3, { message: "Email must be at least of 3 character." })
        .max(100, { message: "Email not be more than 100 characters." }),

    phoneNumber: z
        .string({ required_error: "Phone Number is required" })
        .trim()
        .min(10, { message: "Phone Number must be at least of 10 character." })
        .max(20, { message: "Phone Number not be more than 20 characters." }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Password must be at least of 3 character." })
        .max(50, { message: "Password not be more than 50 characters." })
})

module.exports = signupschema
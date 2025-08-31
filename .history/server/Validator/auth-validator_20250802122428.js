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
        .string({required_error : "Phone is required"})
        .trim()
        .min(10, { message: "Phone Number must be at least of 10 digits." })
        .max(20, { message: "Phone Number must not be more than 20 digits." }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Password must be at least of 3 character." })
        .max(50, { message: "Password not be more than 50 characters." })
})

// const Loginschema = z.object({

//     email: z
//         .string({ required_error: "email is required" })
//         .trim()
//         .email({message: "Invalid email address"})
//         .min(3, { message: "Email must be at least of 3 character." })
//         .max(100, { message: "Email not be more than 100 characters." }),


//     Password: z
//         .string({ required_error: "Password is required" })
//         .trim()
//         .min(3, { message: "Password must be at least of 3 character." })
//         .max(50, { message: "Password not be more than 50 characters." })
// })

module.exports = signupschema
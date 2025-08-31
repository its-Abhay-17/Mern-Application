const { z, email } = require('zod')

//create an object
const signUpSchema = z.object({
    username: z
    .string({required_error :"Name is required"})
    .trim()
    .min(3,{message:"Username must be at least of 3 characters"})
    .max(100,{message:"Username not more than 100 characters"}),

    email: z
    .string({required_error :"Email is required"})
    .trim()
    .min(3,{message:"Email must be at least of 3 characters"})
    .max(100,{message:"Email not more than 100 characters"}),

    phoneNumber: z
    .string({required_error :"Phone Number is required"})
    .trim()
    .nonempty({message:"Phone number must be required"})
    .min(10,{message:"Phone number must be at least of 10 characters"})
    .max(20,{message:"Phone number not more than 20 characters"}),

    password: z
    .string({required_error :"Password is required"})
    .trim()
    .min(3,{message:"Password must be at least of 3 characters"})
    .max(100,{message:"password not more than 100 characters"})
})

module.exports = signUpSchema
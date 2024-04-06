import * as z from 'zod';

export const signupValidationSchema = z.object({
  name: z.string({
    required_error: 'No name is given'
  }).min(2, { message: 'Name is too short' }),
  username: z.string({
    required_error: 'No username is given'
  }).min(2, { message: 'Username is too short' }), 
  email: z.string({
    required_error: "email is required"
  }).min(2, { message: 'Too short' }),
  // .regex(new RegExp('*@gmail.com'), {
  //   message: 'Email must end with \'@gmail.com\''
  // }),
  password: z.string({
    required_error: "password is required"
  }).min(8, {
    message: "Password must be at least 8 characters long"
  })
  .regex(new RegExp('[A-Z]'), {
    message: "Password must contain at least one capital letter"
  })
  .regex(new RegExp('[a-z]'), {
    message: "Password must contain at least one small letter"
  })
  .regex(new RegExp('[0-9]'), {
    message: "Password must contain at least one digit"
  })
})

export const signinValidationSchema = z.object({
  email: z.string({
    required_error: 'Please provide a email'
  }),
  password: z.string({
    required_error: 'Please provide a valid password',
  })
})

export const PostFormSchema = z.object({
  caption: z.string({
    required_error: 'Please provide a email'
  })
  .min(5, { message: 'Minimum length should be 5 characters.'})
  .max(2200, { message: 'Maximum length should be 2200 characters.'}),
  
  file: z.custom<File[]>(),
  location: z.string().min(2).max(200),
  tags: z.string(),
})

export const UserFormSchema = z.object({
  username: z.string({
    required_error: 'No username is given'
  }).min(2, { message: 'Username is too short' }), 
  name: z.string({
    required_error: 'No name is given'
  }).min(2, { message: 'Name is too short' }),
  email: z.string({
    required_error: "email is required"
  }).min(2, { message: 'Too short' }),
  bio: z.string(),
})
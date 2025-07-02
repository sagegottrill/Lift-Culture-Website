import { z } from "zod"

// Auth validation schemas
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
})

export const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),
  terms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
})

// Contact form validation
export const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

// Checkout validation
export const checkoutSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^$$\d{3}$$ \d{3}-\d{4}$/, "Please enter a valid phone number"),
  address: z.string().min(5, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(1, "Please select a state"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code"),
  sameAsShipping: z.boolean().optional(),
})

// Newsletter validation
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  preferences: z.array(z.string()).optional(),
})

// Search validation
export const searchSchema = z.object({
  query: z.string().min(1, "Please enter a search term"),
  category: z.string().optional(),
  priceRange: z.array(z.number()).optional(),
  sortBy: z.string().optional(),
})

export type LoginFormData = z.infer<typeof loginSchema>
export type SignupFormData = z.infer<typeof signupSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type CheckoutFormData = z.infer<typeof checkoutSchema>
export type NewsletterFormData = z.infer<typeof newsletterSchema>
export type SearchFormData = z.infer<typeof searchSchema>

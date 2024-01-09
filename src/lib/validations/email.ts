import * as z from 'zod'
import { limitsErrorMessage } from '@/lib/utils'
import { type Limits } from '@/types'

export const emailSchema = z.object({
  email: z.string().email({
    message: 'Porfavor ingresa una dirección de correo electrónico válida.'
  })
})

const nameLimits: Limits = { min: 6, max: 64 }
const nameLimitsErrorMessage = limitsErrorMessage(nameLimits)

const subjectLimits: Limits = { min: 12, max: 512 }
const subjectLimitsErrorMessage = limitsErrorMessage(subjectLimits)

export const contactEmailSchema = z.object({
  name: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  email: emailSchema.shape.email,
  category: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  subject: z.string()
    .min(subjectLimits.min, { message: subjectLimitsErrorMessage })
    .max(subjectLimits.max, { message: subjectLimitsErrorMessage })
})

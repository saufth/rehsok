import * as z from 'zod'
import { limitsErrorMessage } from '@/lib/utils'
import { type Limits } from '@/types'

const nameLimits: Limits = { min: 6, max: 80 }
const nameLimitsErrorMessage = limitsErrorMessage(nameLimits)

const subjectLimits: Limits = { min: 12, max: 512 }
const subjectLimitsErrorMessage = limitsErrorMessage(subjectLimits)

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const emailSchema = z.object({
  email: z.string()
    .email({ message: 'Porfavor ingresa una dirección de correo electrónico válida.' })
    .max(nameLimits.max, { message: nameLimitsErrorMessage })
})

export const contactEmailSchema = z.object({
  company: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  website: z.string()
    .url()
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  name: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  positionHeld: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  phone: z.string()
    .regex(phoneRegExp, { message: 'El número es inválido' })
    .min(10, { message: 'El número debe tener 10 dígitos' })
    .max(10, { message: 'El número debe tener 10 dígitos' }),
  email: emailSchema.shape.email,
  category: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  subject: z.string()
    .min(subjectLimits.min, { message: subjectLimitsErrorMessage })
    .max(subjectLimits.max, { message: subjectLimitsErrorMessage })
})

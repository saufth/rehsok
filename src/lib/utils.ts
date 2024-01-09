import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type Limits } from '@/types'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify (str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

export function absoluteUrl (path: string = '/') {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function limitsErrorMessage ({ min, max }: Limits) {
  return `Debe tener de ${min} a ${max} caracteres`
}

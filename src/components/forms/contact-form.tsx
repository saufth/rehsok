'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/text-area'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { toast } from 'sonner'
import ReCAPTCHA from 'react-google-recaptcha'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactEmailSchema } from '@/lib/validations/email'
import { services } from '@/config/services'

type Inputs = z.infer<typeof contactEmailSchema>

const recaptchaSitekey = String(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)

export default function ContactForm () {
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<Inputs>({
    resolver: zodResolver(contactEmailSchema),
    defaultValues: {
      company: '',
      website: '',
      name: '',
      positionHeld: '',
      phone: '',
      email: '',
      category: services.items[0]!.title,
      subject: ''
    }
  })

  const formRef = React.useRef<HTMLFormElement>(null)
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)

  const onSubmit = async (data: Inputs) => {
    startTransition(async () => {
      if (!recaptchaRef.current?.getValue()) {
        toast.error('Porfavor, verifica que no eres un robot.')
        return
      }

      const response = await fetch('/api/email/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        switch (response.status) {
          case 422:
            toast.error('Entrada invalida.')
            break
          case 500:
            toast.error('Algo salió mal. Revisa que los datos que ingresaste o inténtalo de nuevo más tarde.')
            break
          default:
            toast.error('Algo salió mal. Revisa que los datos que ingresaste o inténtalo de nuevo más tarde.')
        }
        return
      }

      toast.success('Hemos recibido tu mensaje. En breve serás atendido por un asesor.')
      form.reset()
    })
  }

  return (
    <Form {...form}>
      <form
        className='space-y-4 sm:space-y-6'
        // eslint-disable-next-line no-void
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        ref={formRef}
      >
        <FormField
          control={form.control}
          name='company'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Empresa</FormLabel>
              <FormControl>
                <Input
                  className='text-background rounded-none'
                  placeholder='Ejemplo S.A. de C.V.'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='website'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Página web</FormLabel>
              <FormControl>
                <Input
                  className='text-background rounded-none'
                  placeholder='www.ejemplo.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de contacto</FormLabel>
              <FormControl>
                <Input
                  className='text-background rounded-none'
                  placeholder='Tu nombre completo'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='positionHeld'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Puesto que desempeña</FormLabel>
              <FormControl>
                <Input
                  className='text-background rounded-none'
                  placeholder='Director administrativo'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono de contacto</FormLabel>
              <FormControl>
                <Input
                  className='text-background rounded-none'
                  placeholder='Ingresa un número de 10 dígitos'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo de contacto</FormLabel>
              <FormControl>
                <Input
                  className='text-background rounded-none'
                  placeholder='correo@ejemplo.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='category'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Categoría</FormLabel>
              <Select
                value={field.value}
                onValueChange={(value: typeof field.value) =>
                  field.onChange(value)}
              >
                <FormControl>
                  <SelectTrigger className='[&>*]:text-background rounded-none'>
                    <SelectValue placeholder={field.value} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='rounded-none'>
                  <SelectGroup>
                    {services.items.map(
                      (service) => (
                        <SelectItem
                          key={service.title}
                          value={service.title}
                          placeholder='Selecciona una categoría'
                          className='rounded-none hover:cursor-pointer'
                        >
                          {service.title}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción de la problemática o solución que necesita</FormLabel>
              <FormControl>
                <Textarea
                  className='resize-none text-background rounded-none'
                  rows={4}
                  placeholder='Cúentanos sobre tu proyecto'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={recaptchaSitekey}
        />
        <Button
          className='rounded-sm hover:bg-transparent'
          variant='outline'
          disabled={isPending}
          size='full'
        >
          {isPending
            ? (
              <span className='flex items-center gap-x-2'>
                Enviando <Icons.Spinner className='h-3 w-3' aria-hidden='true' />
              </span>)
            : (
              <span className='flex items-center gap-x-2'>
                Enviar <PaperPlaneIcon className='h-3 w-3' aria-hidden='true' />
              </span>)}
        </Button>
      </form>
    </Form>
  )
}

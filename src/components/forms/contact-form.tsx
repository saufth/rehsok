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
      name: '',
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
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tu nombre</FormLabel>
              <FormControl>
                <Input placeholder='¿Cuál es tu nombre?' {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
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
                  <SelectTrigger>
                    <SelectValue placeholder={field.value} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {services.items.map(
                      (service) => (
                        <SelectItem
                          key={service.title}
                          value={service.title}
                          placeholder='Selecciona una categoría'
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
              <FormLabel>Asunto</FormLabel>
              <FormControl>
                <Textarea
                  className='resize-none'
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
          disabled={isPending}
          size='full'
        >
          {isPending
            ? (
              <span className='flex items-center gap-x-2 text-primary-foreground/50'>
                Enviando <Icons.Spinner className='h-3 w-3 stroke-primary-foreground/50' aria-hidden='true' />
              </span>)
            : (
              <span className='flex items-center gap-x-2 text-primary-foreground group-hover:text-accent-foreground'>
                Enviar <PaperPlaneIcon className='h-3 w-3 [&>*]:fill-primary-foreground [&>*]:group-hover:fill-accent-foreground transition-colors duration-500' aria-hidden='true' />
              </span>)}
        </Button>
      </form>
    </Form>
  )
}

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-max inline-flex items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground',
        destructive: 'bg-destructive/90 text-destructive-foreground hover:bg-destructive',
        outline: 'border border-primary text-primary hover:bg-primary text-primary hover:text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground',
        ghost: 'bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground border',
        link: 'hover:underline'
      },
      size: {
        default: 'h-11 xl:h-12 px-3.5 text-sm xl:text-base',
        xs: 'text-xs xl:text-sm',
        sm: 'px-1 text-sm xl:text-base',
        lg: 'w-fit py-1 xl:py-0.5 px-1.5 xl:px-2 xl:text-lg',
        full: 'w-full xl:w-fit h-12 xl:h-13 px-4 xl:px-6 text-sm xl:text-base',
        icon: 'h-7 xl:h-[33px] w-7 xl:w-[33px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

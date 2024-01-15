'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/icons'
import { useTheme } from 'next-themes'

export function ModeToggle () {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='group h-8 w-8 border-none hover:bg-transparent focus-visible:ring-0'
        >
          <Icons.Sun className='rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 fill-white' />
          <Icons.Moon className='absolute rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 fill-white' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem className='group cursor-pointer transition-colors duration-500' onClick={() => setTheme('light')}>
          <Icons.Sun className='mr-2 h-4 w-4 fill-primary group-hover:fill-secondary transition-colors duration-500' />
          <span className='text-primary group-hover:text-primary-foreground transition-colors duration-500'>Calro</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='group cursor-pointer transition-colors duration-500' onClick={() => setTheme('dark')}>
          <Icons.Moon className='mr-2 h-4 w-4 fill-primary group-hover:fill-secondary transition-colors duration-500' />
          <span className='text-primary group-hover:text-primary-foreground transition-colors duration-500'>Oscuro</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='group cursor-pointer transition-colors duration-500' onClick={() => setTheme('system')}>
          <Icons.Laptop className='mr-2 h-4 w-4 fill-primary group-hover:fill-secondary transition-colors duration-500' />
          <span className='text-primary group-hover:text-primary-foreground transition-colors duration-500'>Sistema</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

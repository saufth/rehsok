import React from 'react'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { type Item } from '@/types'

interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
    article: Item
}

export function InfoCard ({ article, ...props }: ArticleCardProps) {
  return (
    <Card as='article' {...props}>
      <CardHeader>
        <div className='space-y-1'>
          {article.label && <Badge>{article.label}</Badge>}
          <CardTitle as='h3'>
            <Balancer className='text-h3 text-card-foreground'>
              {article.title}
            </Balancer>
          </CardTitle>
        </div>
        {typeof article.description === 'object'
          ? (
            <ul className='space-y-1 list-disc marker:text-card-foreground pl-4'>
              {article.description.map((paragraph, key) => (
                <li key={key}>
                  <CardDescription>
                    <Balancer className='text-p3 text-card-foreground'>
                      {paragraph}
                    </Balancer>
                  </CardDescription>
                </li>
              ))}
            </ul>
            )
          : (
            <CardDescription>
              <Balancer className='text-p3 text-card-foreground'>
                {article.description}
              </Balancer>
            </CardDescription>
            )}
      </CardHeader>
      <CardContent>
        <div className='aspect-[308/173] overflow-hidden rounded-xl bg-primary relative'>
          <Image
            src={article.image}
            alt={article.title}
            className='object-cover'
            sizes='(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw'
            fill
            loading='lazy'
          />
        </div>
      </CardContent>
    </Card>
  )
}

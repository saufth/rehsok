export interface NavItem {
  title: string
  href: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface Item {
  title: string
  description: string | string[]
  image: ImageProps
  label?: string
}

export type ItemWithOptionalDescription = Pick<Item, 'title' | 'label' | 'image'> & Partial<Pick<Item, 'description'>>

export type ItemWithOptionalContent = Pick<Item, 'title' | 'label'> & Partial<Pick<Item, 'description' | 'image'>>

export interface Article extends ItemWithOptionalContent {
  items: string[]
}

export interface Section extends ItemWithOptionalContent {
  items: Item[]
}

export interface Subcategory extends ItemWithOptionalDescription {
  slug?: string
  items?: Item[]
}

export interface Category extends ItemWithOptionalContent {
  items: Subcategory[]
}

export interface Limits {
  min: number
  max: number
}

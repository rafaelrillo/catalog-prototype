import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ww97anmg',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-05',
  useCdn: true,
}

// Validar que las variables requeridas estén presentes
if (!config.projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}
if (!config.dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET environment variable')
}
if (!config.apiVersion) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_API_VERSION environment variable')
}

export const sanityClient = createClient(config)

const builder = imageUrlBuilder(sanityClient)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source)

// Queries
export const CATEGORIES_QUERY = `*[_type == "category"] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  cardBgColor,
  portionBgColor,
  order
}`

export const PRODUCTS_QUERY = `*[_type == "product" && available == true] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  portions,
  image,
  "category": category->{
    _id,
    name,
    "slug": slug.current
  },
  available,
  featured,
  order
}`

export const PRODUCTS_BY_CATEGORY_QUERY = `*[_type == "product" && available == true && category._ref == $categoryId] | order(order asc) {
  _id,
  name,
  "slug": slug.current,
  description,
  price,
  portions,
  image,
  available,
  featured,
  order
}`

export const SITE_CONFIG_QUERY = `*[_type == "siteConfig"][0] {
  _id,
  title,
  description,
  logo,
  phone,
  whatsapp,
  instagram,
  email,
  address,
  hours[] {
    day,
    hours,
    closed
  }
}`

// Helper functions
export async function getCategories(): Promise<Category[]> {
  return sanityClient.fetch(CATEGORIES_QUERY)
}

export async function getProducts(): Promise<Product[]> {
  return sanityClient.fetch(PRODUCTS_QUERY)
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  return sanityClient.fetch(PRODUCTS_BY_CATEGORY_QUERY, { categoryId })
}

export async function getSiteConfig(): Promise<SiteConfig> {
  return sanityClient.fetch(SITE_CONFIG_QUERY)
}

// Types
export interface Category {
  _id: string
  name: string
  slug: string
  cardBgColor: string
  portionBgColor: string
  order: number
}

export interface Product {
  _id: string
  name: string
  slug: string
  description: string
  price: number
  portions?: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  category?: {
    _id: string
    name: string
    slug: string
  }
  available: boolean
  featured: boolean
  order: number
}

export interface SiteConfig {
  _id: string
  title: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo: any
  phone: string
  whatsapp: string
  instagram: string
  email: string
  address: string
  hours: {
    day: string
    hours: string
    closed: boolean
  }[]
}
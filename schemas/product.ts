import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'available',
      title: 'Disponible',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'portions',
      title: 'Porciones',
      type: 'number',
      description: 'Número de porciones que rinde el producto',
      validation: (Rule) => Rule.required().min(1).max(50),
      initialValue: 8,
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición en la categoría',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      category: 'category.name',
      available: 'available',
    },
    prepare(selection) {
      const { title, media, category, available } = selection
      return {
        title,
        subtitle: `${category} ${available ? '✅' : '❌'}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Por categoría y orden',
      name: 'categoryAndOrder',
      by: [
        { field: 'category.name', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
})
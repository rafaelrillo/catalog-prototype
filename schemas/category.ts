import { defineField, defineType } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Categoría',
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
      name: 'cardBgColor',
      title: 'Color de Fondo de Tarjeta',
      type: 'string',
      description: 'Color hexadecimal (ej: #E67792)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'portionBgColor',
      title: 'Color de Fondo de Porción',
      type: 'string',
      description: 'Color hexadecimal (ej: #EB1951)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      description: 'Orden de aparición en el menú',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      order: 'order',
    },
    prepare(selection) {
      const { title, order } = selection
      return {
        title,
        subtitle: `Orden: ${order}`,
      }
    },
  },
  orderings: [
    {
      title: 'Por orden',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
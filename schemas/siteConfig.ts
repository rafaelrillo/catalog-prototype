import { defineField, defineType } from 'sanity'

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Sitio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'Número de WhatsApp con código de país (ej: +54911234567)',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'URL completa del perfil de Instagram',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'text',
    }),
    defineField({
      name: 'hours',
      title: 'Horarios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Día',
              type: 'string',
              options: {
                list: [
                  { title: 'Lunes', value: 'monday' },
                  { title: 'Martes', value: 'tuesday' },
                  { title: 'Miércoles', value: 'wednesday' },
                  { title: 'Jueves', value: 'thursday' },
                  { title: 'Viernes', value: 'friday' },
                  { title: 'Sábado', value: 'saturday' },
                  { title: 'Domingo', value: 'sunday' },
                ],
              },
            },
            {
              name: 'hours',
              title: 'Horario',
              type: 'string',
              description: 'Ej: 9:00 - 18:00',
            },
            {
              name: 'closed',
              title: 'Cerrado',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
})
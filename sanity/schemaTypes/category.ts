import { defineType } from "sanity";

export default defineType({
  name: 'category',
  title: 'Categoria do Produto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título da Categoria',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icone',
      type: 'image',
      validation: (Rule) => Rule.required()
    }
  ]
});

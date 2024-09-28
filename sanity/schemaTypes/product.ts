// schemas/product.ts
import { defineType } from "sanity";

export default defineType({
  name: 'product',
  title: 'Criar Produto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: Rule => Rule.required().min(5).max(100)
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      validation: Rule => Rule.required().min(10).max(500)
    },
    {
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'price',
      title: 'Preço',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'stock',
      title: 'Estoque',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      title: 'Imagens',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'featured',
      title: 'Produto em destaque',
      type: 'boolean',
      initialValue: false,
      description: 'Marque como destaque para que apareça como produto em destaque'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images[0]',
    }
  }
});

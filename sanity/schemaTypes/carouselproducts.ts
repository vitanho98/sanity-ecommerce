import { defineType } from "sanity";

export default defineType({
  name: 'carouselproducts',
  title: 'Carousel de Produtos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título do Carousel',
      type: 'string',
      validation: Rule => Rule.required().error('O título é obrigatório')
    },
    {
      name: 'image',
      title: 'Imagem do Carousel',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('A imagem é obrigatória')
    },
    {
      name: 'product',
      title: 'Produto Referenciado',
      type: 'reference',
      to: [{ type: 'product' }],
      description: 'Opcionalmente, referencie um produto relacionado',
      validation: Rule => Rule.optional()
    },
  ],
});

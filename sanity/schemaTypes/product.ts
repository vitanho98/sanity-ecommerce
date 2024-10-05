import { defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Criar Produto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo do Produto',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    {
      name: 'slug',
      title: 'Slug do Produto',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Conteúdo do Produto',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'price',
      title: 'Preço do Produto Original',
      description: 'Se o produto não tem desconto, coloque o preço original',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'discountPrice',
      title: 'Preço Com Desconto',
      description:
        'Coloque o preço com desconto do produto exemplo: R$ 100 por 20% de desconto, coloque 80',
      type: 'number',
      validation: (Rule) =>
        Rule.min(0).custom((value, context) => {
          const document = context?.document;
          if (
            document &&
            typeof document.price === 'number' &&
            typeof value === 'number' &&
            value > document.price
          ) {
            return 'O preço com desconto deve ser menor que o preço original.';
          }

          return true;
        }),
    },
    {
      name: 'stock',
      title: 'Estoque do Produto',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'category',
      title: 'Categoria do Produto',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Imagem do Produto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featured',
      title: 'Produto em destaque',
      type: 'boolean',
      initialValue: false,
      description:
        'Marque como destaque para que apareça como produto em destaque',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});

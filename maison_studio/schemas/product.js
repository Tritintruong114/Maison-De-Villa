export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLenght: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'detail',
      title: 'Detail',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Categories',
      name: 'category',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },

    {
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'guests',
      title: 'Guests',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'roomStructure',
      title: 'Rooms Structure',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bathroomsStructure',
      title: 'Bathrooms Structure',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}

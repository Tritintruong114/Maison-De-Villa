export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    // prepare({title, slug}) {
    //   return {
    //     city: title,
    //     country: country,
    //     subtitle: slug.current,
    //   }
    // },
  },
}

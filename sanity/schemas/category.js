const PILLARS = [
  { title: 'AI + Physical Systems', value: 'ai-physical' },
  { title: 'Control Systems Philosophy', value: 'control-philosophy' },
  { title: 'Re-industrialization', value: 'reindustrialization' },
  { title: 'Engineering Design Thinking', value: 'design-thinking' },
];

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'pillar',
      title: 'Content Pillar',
      type: 'string',
      options: {
        list: PILLARS,
        layout: 'dropdown',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pillar',
    },
  },
};

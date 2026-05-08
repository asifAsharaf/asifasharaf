import { config, collection, singleton, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'asifAsharaf', name: 'asifasharaf' },
  },

  ui: {
    brand: { name: 'Antigravity' },
  },

  collections: {
    work: collection({
      label: 'Work',
      slugField: 'title',
      path: 'src/content/work/*',
      format: { contentField: 'body' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description (one line)' }),
        year: fields.integer({ label: 'Year' }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: (props) => props.fields.value.value ?? 'Tag' }
        ),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/work',
          publicPath: '/images/work',
        }),
        client: fields.text({
          label: 'Client',
          validation: { isRequired: false },
        }),
        featured: fields.checkbox({ label: 'Featured on homepage', defaultValue: false }),
        externalUrl: fields.url({
          label: 'External URL',
          validation: { isRequired: false },
        }),
        body: fields.mdx({ label: 'Case Study Body' }),
      },
    }),

    writing: collection({
      label: 'Writing',
      slugField: 'title',
      path: 'src/content/writing/*',
      format: { contentField: 'body' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedAt: fields.date({ label: 'Published' }),
        summary: fields.text({ label: 'Summary' }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: (props) => props.fields.value.value ?? 'Tag' }
        ),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        body: fields.mdx({ label: 'Body' }),
      },
    }),

    people: collection({
      label: 'People',
      slugField: 'name',
      path: 'src/content/people/*',
      format: { contentField: 'body' },
      entryLayout: 'content',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        handle: fields.text({ label: 'Handle / identifier' }),
        role: fields.text({ label: 'Role' }),
        location: fields.text({ label: 'Location' }),
        url: fields.url({ label: 'Website or profile' }),
        avatar: fields.image({
          label: 'Avatar',
          directory: 'public/images/people',
          publicPath: '/images/people',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Skill tags (e.g. motion, brand, ui)', itemLabel: (props) => props.fields.value.value ?? 'Tag' }
        ),
        relationship: fields.select({
          label: 'Relationship',
          options: [
            { label: 'Colleague', value: 'colleague' },
            { label: 'Friend', value: 'friend' },
            { label: 'Mentor', value: 'mentor' },
            { label: 'Internet friend', value: 'internet friend' },
          ],
          defaultValue: 'internet friend',
        }),
        asifsTake: fields.text({
          label: "Asif's Take",
          multiline: true,
          description: 'Your honest, personal opinion of their work.',
        }),
        featured: fields.checkbox({ label: 'Featured on homepage', defaultValue: false }),
        body: fields.mdx({ label: 'Extended notes (optional)' }),
      },
    }),

    jobs: collection({
      label: 'Jobs & Opportunities',
      slugField: 'title',
      path: 'src/content/jobs/*',
      format: { contentField: 'body' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        company: fields.text({ label: 'Company' }),
        location: fields.text({ label: 'Location (e.g. Remote, Bengaluru)' }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Full-time', value: 'full-time' },
            { label: 'Part-time', value: 'part-time' },
            { label: 'Contract', value: 'contract' },
            { label: 'Freelance', value: 'freelance' },
            { label: 'Internship', value: 'internship' },
          ],
          defaultValue: 'full-time',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags (e.g. product design, ux, research)', itemLabel: (props) => props.fields.value.value ?? 'Tag' }
        ),
        url: fields.url({ label: 'Apply / Original job URL' }),
        salary: fields.text({
          label: 'Salary / Compensation (optional)',
          description: 'e.g. ₹20–30L, $80–100k, Not disclosed',
          validation: { isRequired: false },
        }),
        postedAt: fields.date({ label: 'Date posted' }),
        expiresAt: fields.date({
          label: 'Expires (optional)',
          validation: { isRequired: false },
        }),
        active: fields.checkbox({ label: 'Still open / active', defaultValue: true }),
        asifNote: fields.text({
          label: "Asif's Note",
          multiline: true,
          description: 'Why you think this is worth sharing.',
          validation: { isRequired: false },
        }),
        body: fields.mdx({ label: 'Full job description (optional)' }),
      },
    }),
  },

  singletons: {
    about: singleton({
      label: 'About',
      path: 'src/content/singletons/about',
      schema: {
        headline: fields.text({ label: 'Headline' }),
        bioShort: fields.text({ label: 'Short bio (2–3 sentences)', multiline: true }),
        bioLong: fields.text({ label: 'Full about page content', multiline: true }),
        email: fields.text({ label: 'Email' }),
        linkedin: fields.url({ label: 'LinkedIn URL' }),
        instagram: fields.url({ label: 'Instagram URL' }),
      },
    }),

    uses: singleton({
      label: 'Uses',
      path: 'src/content/singletons/uses',
      schema: {
        intro: fields.text({ label: 'Intro', multiline: true }),
        sections: fields.array(
          fields.object({
            heading: fields.text({ label: 'Section heading' }),
            items: fields.array(
              fields.object({
                name: fields.text({ label: 'Name' }),
                description: fields.text({ label: 'Description', multiline: true }),
                url: fields.url({ label: 'URL', validation: { isRequired: false } }),
              }),
              { label: 'Items', itemLabel: (props) => props.fields.name.value ?? 'Item' }
            ),
          }),
          { label: 'Sections', itemLabel: (props) => props.fields.heading.value ?? 'Section' }
        ),
      },
    }),
  },
})

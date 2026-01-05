import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientLogo',
      title: 'Client Logo',
      type: 'image',
      description: 'Client or project logo (displayed at top of project page)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'servicesProvided',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Web Design', value: 'web-design' },
          { title: 'Social Media', value: 'social-media' },
          { title: 'SEO', value: 'seo' },
          { title: 'Design', value: 'design' },
        ],
        layout: 'grid',
      },
      validation: (Rule) => Rule.required().min(1).error('Select at least one service'),
      description: 'What services did you provide for this client? This determines which sections appear on the project page.',
    }),
    defineField({
      name: 'displayType',
      title: 'Primary Display Type',
      type: 'string',
      options: {
        list: [
          { title: 'Website Mockup (Browser/Phone)', value: 'web-mockup' },
          { title: 'Social Media Card (Instagram-style)', value: 'social-card' },
          { title: 'SEO Metrics Dashboard', value: 'seo-card' },
          { title: 'Design Portfolio Card', value: 'design-card' },
          { title: 'Generic Card (Simple)', value: 'generic' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      description: 'How should this project appear on the work page grid? This controls the visual card style, not the services you provided.',
      initialValue: 'web-mockup',
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Link to the live project (optional)',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('web-design');
      },
    }),
    defineField({
      name: 'completedDate',
      title: 'Completed Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'websiteDescription',
      title: 'Website Service Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Describe what you did for the website (supports formatting)',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('web-design');
      },
    }),
    defineField({
      name: 'websiteProjectType',
      title: 'Website Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'New Website Build', value: 'new-build' },
          { title: 'Website Redesign/Update', value: 'redesign' },
          { title: 'Website Maintenance & Improvements', value: 'maintenance' },
        ],
        layout: 'radio',
      },
      description: 'Was this a brand new website or work on an existing site?',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('web-design');
      },
    }),
    defineField({
      name: 'websiteTechnologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'What technologies/platforms did you use to build this website? (e.g., Next.js, React, WordPress, Shopify)',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        const projectType = document?.websiteProjectType as string | undefined;
        return !services?.includes('web-design') || projectType !== 'new-build';
      },
    }),
    defineField({
      name: 'websiteChallenges',
      title: 'Challenges & Obstacles',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What technical challenges or obstacles did this project need to overcome?',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        const projectType = document?.websiteProjectType as string | undefined;
        return !services?.includes('web-design') || projectType !== 'new-build';
      },
    }),
    defineField({
      name: 'websiteSolutions',
      title: 'Solutions Implemented',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'How did you solve those challenges? What approach did you take?',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        const projectType = document?.websiteProjectType as string | undefined;
        return !services?.includes('web-design') || projectType !== 'new-build';
      },
    }),
    defineField({
      name: 'websiteExistingPlatform',
      title: 'Existing Platform/Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'What platform or technologies was the site originally built on? (e.g., WordPress, Wix, Squarespace, custom HTML)',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        const projectType = document?.websiteProjectType as string | undefined;
        return !services?.includes('web-design') || projectType === 'new-build';
      },
    }),
    defineField({
      name: 'websiteIssues',
      title: 'Issues with Previous Site',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What problems existed with the previous site? What needed to be fixed?',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        const projectType = document?.websiteProjectType as string | undefined;
        return !services?.includes('web-design') || projectType === 'new-build';
      },
    }),
    defineField({
      name: 'websiteImprovements',
      title: 'Improvements Made',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'What did you do to fix or improve the site?',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        const projectType = document?.websiteProjectType as string | undefined;
        return !services?.includes('web-design') || projectType === 'new-build';
      },
    }),
    defineField({
      name: 'websiteFeatures',
      title: 'Key Website Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List key features or highlights of the website (e.g., "Custom animations", "95+ Lighthouse score")',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('web-design');
      },
    }),
    defineField({
      name: 'desktopScreenshot',
      title: 'Desktop Screenshot',
      type: 'image',
      description: 'Screenshot of the website in desktop/browser view',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
        },
      ],
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('web-design');
      },
    }),
    defineField({
      name: 'mobileScreenshot',
      title: 'Mobile Screenshot',
      type: 'image',
      description: 'Screenshot of the website in mobile view',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
        },
      ],
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('web-design');
      },
    }),
    defineField({
      name: 'socialMediaDescription',
      title: 'Social Media Service Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Describe your social media work for this client (supports formatting)',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('social-media');
      },
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Username',
      type: 'string',
      description: 'Instagram username (without @) for this client',
      placeholder: 'username',
      validation: (Rule) => Rule.custom((value) => {
        if (!value) return true; // Optional field
        if (value.startsWith('@')) {
          return 'Do not include @ symbol';
        }
        return true;
      }),
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('social-media');
      },
    }),
    defineField({
      name: 'instagramProfilePicture',
      title: 'Instagram Profile Picture',
      type: 'image',
      description: 'Instagram profile picture (fetched from API or manually uploaded)',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('social-media');
      },
    }),
    defineField({
      name: 'isInstagramVerified',
      title: 'Instagram Verified Account',
      type: 'boolean',
      description: 'Does this Instagram account have a blue checkmark?',
      initialValue: false,
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('social-media');
      },
    }),
    defineField({
      name: 'socialMediaPosts',
      title: 'Social Media Posts',
      type: 'array',
      description: 'Upload images of social media posts created for this client',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Describe the social media post',
            },
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              description: 'Which platform is this post for?',
              options: {
                list: ['Instagram', 'Facebook', 'Twitter/X', 'LinkedIn', 'TikTok', 'Other']
              }
            },
            {
              name: 'caption',
              type: 'text',
              title: 'Post Caption',
              description: 'The caption/text for this post (makes it look authentic)',
              rows: 3,
            },
            {
              name: 'postUrl',
              type: 'url',
              title: 'Link to Original Post',
              description: 'URL to the actual Instagram/social media post (optional)',
            },
          ],
        },
      ],
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('social-media');
      },
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Service Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Describe your SEO work and strategy for this client (supports formatting)',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('seo');
      },
    }),
    defineField({
      name: 'seoMetrics',
      title: 'SEO Results & Metrics',
      type: 'object',
      description: 'SEO performance metrics and results',
      fields: [
        {
          name: 'beforeScreenshot',
          type: 'image',
          title: 'Before Screenshot',
          description: 'Analytics/rankings before SEO work',
        },
        {
          name: 'afterScreenshot',
          type: 'image',
          title: 'After Screenshot',
          description: 'Analytics/rankings after SEO work',
        },
        {
          name: 'improvements',
          type: 'array',
          title: 'Key Improvements',
          of: [{ type: 'string' }],
          description: 'List key SEO improvements (e.g., "50% increase in organic traffic")',
        },
      ],
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('seo');
      },
    }),
    defineField({
      name: 'brandingDescription',
      title: 'Design Service Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Describe your branding/design work for this client (supports formatting)',
      hidden: ({ document }) => {
        const services = document?.servicesProvided as string[] | undefined;
        return !services?.includes('design');
      },
    }),
    defineField({
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      description: 'Other project images, screenshots, or visual assets',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type (Legacy)',
      type: 'string',
      options: {
        list: [
          { title: 'Web Design', value: 'web-design' },
          { title: 'Social Media', value: 'social-media' },
          { title: 'SEO', value: 'seo' },
          { title: 'Design', value: 'design' },
        ],
        layout: 'radio',
      },
      initialValue: 'web-design',
      hidden: true,
      description: 'Legacy field - use Services Provided instead',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Display this project prominently on the work page',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'images.0',
    },
    prepare(selection) {
      const { title, client, media } = selection;
      return {
        title: title,
        subtitle: client,
        media: media,
      };
    },
  },
});

export default {
    name: 'indexPage',
    title: 'Index Page',
    type: 'document',
    __experimental_actions: [
        'create',
        'update',
        // 'delete',
        'publish',
    ],
    fields: [
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'heroHeading',
            title: 'Hero Heading',
            type: 'string',
        },
        {
            name: 'heroBody',
            title: 'Hero Body',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                },
            ],
        },
        {
            name: 'heroCta',
            title: 'Hero CTA',
            type: 'string',
        },
        {
            name: 'introPlaceholderImage',
            title: 'Placeholder Image',
            type: 'image',
        },
        {
            name: 'introHeading',
            title: 'Intro Heading',
            type: 'string',
        },
        {
            name: 'introBody',
            title: 'Intro Body',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                },
            ],
        },
        {
            name: 'featuresHeading',
            title: 'Features Heading',
            type: 'string',
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'indexFeature' } }],
            validation: (Rule) => Rule.required().max(4),
        },
        {
            name: 'featuredBio',
            title: 'Featured Bio',
            type: 'bio',
        },
        {
            name: 'industriesHeading',
            title: 'Industries Heading',
            type: 'string',
        },
        {
            name: 'indexIndustries',
            title: 'Industries',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'industry' } }],
        },
        {
            name: 'featuredQuote',
            title: 'Featured Quote',
            type: 'quote',
        },
        {
            name: 'ctaHeading',
            title: 'CTA Heading',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'link',
        },
    ],
};

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
    ],
};

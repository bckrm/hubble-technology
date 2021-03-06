export default {
    name: 'featuresPage',
    title: 'Features Page',
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
            name: 'infoSection',
            title: 'Info Section',
            type: 'infoSection',
        },
        {
            name: 'featuresBenefitsSection',
            title: 'Features/Benefits Section',
            type: 'featuresBenefitsSection',
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

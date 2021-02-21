export default {
    name: 'aboutPage',
    title: 'About Page',
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
            name: 'subHero',
            title: 'Sub Hero',
            type: 'fullWidthImage',
        },
        {
            name: 'team',
            title: 'Team',
            type: 'teamSection',
        },
        {
            name: 'investor',
            title: 'Investors',
            type: 'investorSection',
        },
    ],
};

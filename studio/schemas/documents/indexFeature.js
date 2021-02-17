export default {
    name: 'indexFeature',
    title: 'Index Feature',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'navHeading',
            title: 'Nav Heading',
            type: 'string',
        },
        {
            name: 'bodyHeading',
            title: 'Body Heading',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Body',
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
            name: 'link',
            title: 'Link',
            type: 'link',
        },
        {
            name: 'image',
            title: 'image',
            type: 'image',
        },
    ],
};

export default {
    name: 'bio',
    title: 'Featured Bio',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'body',
            title: 'Bio',
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
            title: 'Image',
            type: 'image',
        },
        {
            name: 'bgImage',
            title: 'Background Image',
            type: 'image',
        },
    ],
};

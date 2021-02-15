export default {
    name: 'quote',
    title: 'Quote',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title/Company',
            type: 'string',
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
};

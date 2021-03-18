export default {
    name: 'infoSection',
    title: 'Info Section',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
        },
        {
            name: 'infoItems',
            title: 'Info Items',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'infoItem' } }],
        },
    ],
};

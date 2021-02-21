export default {
    name: 'investorSection',
    title: 'Investor Section',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
        },
        {
            name: 'investors',
            title: 'Investors',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'investor' } }],
        },
    ],
};

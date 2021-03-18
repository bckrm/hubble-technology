export default {
    name: 'featuresBenefitsCollection',
    title: 'Features/Benefits Collection',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'featuresBenefitsItems',
            title: 'Features/Benefits Items',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'featuresBenefitsItem' } }],
        },
    ],
};

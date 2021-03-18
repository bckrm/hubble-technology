export default {
    name: 'featuresBenefitsSection',
    title: 'Features/Benefits',
    type: 'document',
    fields: [
        {
            name: 'Heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'featuresBenefitsItems',
            title: 'Features/Benefits Collection',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: { type: 'featuresBenefitsCollection' },
                },
            ],
        },
    ],
};

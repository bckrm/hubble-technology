export default {
    name: 'teamSection',
    title: 'Team Section',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Section Headign',
            type: 'string',
        },
        {
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'teamMember' } }],
        },
    ],
};

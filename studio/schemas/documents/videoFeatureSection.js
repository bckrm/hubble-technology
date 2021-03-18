export default {
    name: 'videoFeatureSection',
    title: 'Video Section',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
        },
        // setting this as an image until we have the final content
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
    ],
};

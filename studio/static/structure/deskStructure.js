import S from '@sanity/desk-tool/structure-builder';

export default () => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Settings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings'),
                ),
            ...S.documentTypeListItems(),
        ]);
};

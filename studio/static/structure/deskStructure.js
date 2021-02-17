import S from '@sanity/desk-tool/structure-builder';
import {
    VscAccount,
    VscFile,
    // VscFolder,
} from 'react-icons/vsc';

export default () => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Index Page')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('indexPage')
                        .documentId('indexPage'),
                ),
            S.listItem()
                .title('Settings')
                .icon(VscFile)
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings'),
                ),
            S.listItem()
                .title('Author')
                .icon(VscAccount)
                .child(S.document().schemaType('author').documentId('author')),
            ...S.documentTypeListItems().filter(
                (listItem) =>
                    !['author', 'indexPage', 'siteSettings'].includes(
                        listItem.getId(),
                    ),
            ),
        ]);
};

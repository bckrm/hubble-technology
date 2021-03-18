/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import aboutPage from './documents/aboutPage';
import author from './documents/author';
import bio from './documents/bio';
import category from './documents/category';
import featuresBenefitsCollection from './documents/featuresBenefitsCollection';
import featuresBenefitsItem from './documents/featuresBenefitsItem';
import featuresBenefitsSection from './documents/featuresBenefitsSection';
import featuresPage from './documents/featuresPage';
import fullWidthImage from './documents/fullWidthImage';
import indexPage from './documents/indexPage';
import indexFeature from './documents/indexFeature';
import industry from './documents/industry';
import infoItem from './documents/infoItem';
import infoSection from './documents/infoSection';
import internalLink from './documents/internalLink';
import investor from './documents/investor';
import investorSection from './documents/investorSection';
import post from './documents/post';
import siteSettings from './documents/siteSettings';
import teamMember from './documents/teamMember';
import teamSection from './documents/teamSection';
import quote from './documents/quote';

// Object types
import blockContent from './objects/blockContent';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        aboutPage,
        author,
        bio,
        category,
        featuresBenefitsCollection,
        featuresBenefitsItem,
        featuresBenefitsSection,
        featuresPage,
        fullWidthImage,
        investorSection,
        indexPage,
        indexFeature,
        industry,
        infoItem,
        infoSection,
        internalLink,
        investor,
        post,
        siteSettings,
        teamMember,
        teamSection,
        quote,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        blockContent,
    ]),
});

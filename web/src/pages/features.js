import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../page-layouts/layout';
import Hero from '../components/hero';
import ColumnGrid from '../components/columnGrid';
import CtaSection from '../components/ctaSection';
import NewFeaturesSection from '../components/newFeaturesSection';

export default function FeaturesPage({ data }) {
    const { cta, hero, industries, features } = data;

    return (
        <Layout>
            <Hero content={hero} />
            <ColumnGrid content={industries} hasDescriptionText />
            <NewFeaturesSection content={features} />
            <CtaSection content={cta} />
        </Layout>
    );
}

FeaturesPage.propTypes = {
    data: PropTypes.shape({
        cta: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
        industries: PropTypes.object.isRequired,
        features: PropTypes.object.isRequired,
    }).isRequired,
};

export const query = graphql`
    query FeaturesQuery {
        cta: sanityFeaturesPage {
            ctaHeading
            link {
                text
                url
            }
        }
        features: sanityFeaturesPage {
            featuresBenefitsSection {
                Heading
                featuresBenefitsItems {
                    id
                    title
                    featuresBenefitsItems {
                        id
                        heading
                        body
                        image {
                            asset {
                                fluid(maxWidth: 500) {
                                    ...GatsbySanityImageFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        industries: sanityFeaturesPage {
            infoSection {
                heading: heading
                description: summary
                itemsArray: infoItems {
                    id
                    heading
                    description
                    image {
                        asset {
                            fluid(maxWidth: 400, maxHeight: 400) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
            }
        }
        hero: sanityFeaturesPage {
            image: heroImage {
                asset {
                    id
                    fluid(maxWidth: 2000) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            heading: heroHeading
        }
    }
`;

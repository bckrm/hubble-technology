import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../page-layouts/layout';
import Hero from '../components/hero';
// import ColumnGrid from '../components/columnGrid';
import CtaSection from '../components/ctaSection';
import NewFeaturesSection from '../components/newFeaturesSection';

export default function FeaturesPage({ data }) {
    const {
        cta,
        hero,
        feature1Image,
        feature2Image,
        feature3Image,
        // industries,
        features,
    } = data;

    const featureImages = [feature1Image, feature2Image, feature3Image];

    return (
        <Layout>
            <Hero content={hero} />
            {/* <ColumnGrid content={industries} hasDescriptionText /> */}
            <NewFeaturesSection images={featureImages} content={features} />
            <CtaSection content={cta} />
        </Layout>
    );
}

FeaturesPage.propTypes = {
    data: PropTypes.shape({
        cta: PropTypes.object.isRequired,
        feature1Image: PropTypes.object.isRequired,
        feature2Image: PropTypes.object.isRequired,
        feature3Image: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
        // industries: PropTypes.array.isRequired,
        features: PropTypes.object.isRequired,
    }).isRequired,
};

export const query = graphql`
    query FeaturesQuery {
        cta: sanityAboutPage {
            ctaHeading
            link {
                text
                url
            }
        }
        feature1Image: file(relativePath: { regex: "/feature-1/" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        feature2Image: file(relativePath: { regex: "/feature-2/" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        feature3Image: file(relativePath: { regex: "/feature-3/" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
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
        hero: sanityAboutPage {
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

import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../page-layouts/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import FullWidthImage from '../components/fullWidthImage';

export const query = graphql`
    query AboutPage {
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

        fullWidthImage: sanityAboutPage {
            subHero {
                heading
                body
                image {
                    asset {
                        fluid(maxWidth: 2000) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;

export default function AboutPage({ data }) {
    const { fullWidthImage, hero } = data;

    return (
        <Layout>
            <SEO title="Hubble Technology" />
            <Hero content={hero} />
            <FullWidthImage content={fullWidthImage} />
        </Layout>
    );
}

AboutPage.propTypes = {
    data: PropTypes.shape({
        fullWidthImage: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
    }).isRequired,
};

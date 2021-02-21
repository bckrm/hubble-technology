import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../page-layouts/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

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
    }
`;

export default function AboutPage({ data }) {
    const { hero } = data;

    return (
        <Layout>
            <SEO title="Hubble Technology" />
            <Hero content={hero} />
        </Layout>
    );
}

AboutPage.propTypes = {
    data: PropTypes.shape({
        hero: PropTypes.object.isRequired,
    }).isRequired,
};

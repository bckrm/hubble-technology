import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../page-layouts/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

export default function IndexPage({ data }) {
    const {
        heroContent,
        heroImage: { heroImage },
    } = data;

    return (
        <Layout>
            <SEO title="Hubble Technology" />
            <Hero bgImage={heroImage} content={heroContent} />
        </Layout>
    );
}

export const query = graphql`
    query IndexPage {
        heroImage: sanityIndexPage {
            heroImage {
                asset {
                    id
                    fluid(maxWidth: 2000) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
        heroContent: sanityIndexPage {
            _rawHeroBody
            heroHeading
            heroCta
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.shape({
            heroImage: PropTypes.object.isRequired,
        }),
        heroContent: PropTypes.object.isRequired,
    }).isRequired,
};

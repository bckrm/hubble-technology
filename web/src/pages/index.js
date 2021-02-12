import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../page-layouts/layout';
import SEO from '../components/seo';
import IndexHero from '../components/indexHero';
import IndexIntro from '../components/indexIntro';

export default function IndexPage({ data }) {
    const {
        heroContent,
        heroImage: { heroImage },
        introContent,
    } = data;

    return (
        <Layout>
            <SEO title="Hubble Technology" />
            <IndexHero bgImage={heroImage} content={heroContent} />
            <IndexIntro content={introContent} />
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
        introContent: sanityIndexPage {
            introHeading
            _rawIntroBody
            introPlaceholderImage {
                asset {
                    fluid(maxWidth: 2000) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.shape({
            heroImage: PropTypes.object.isRequired,
        }),
        heroContent: PropTypes.object.isRequired,
        introContent: PropTypes.object.isRequired,
    }).isRequired,
};

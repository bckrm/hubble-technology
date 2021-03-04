import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../page-layouts/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import ColumnGrid from '../components/columnGrid';
import CtaSection from '../components/ctaSection';
// import Feature from '../components/feature';

export const query = graphql`
    query ContactPage {
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
        cta: sanityAboutPage {
            ctaHeading
            link {
                text
                url
            }
        }
        industries: sanityIndexPage {
            heading: industriesHeading
            indexIndustries {
                id
                industryName
                heading
                description
                image {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;

export default function ContactPage({ data }) {
    const { cta, hero, industries } = data;

    return (
        <Layout>
            <SEO title="Contact Hubble" />
            <Hero content={hero} />
            <ColumnGrid content={industries} />
            <CtaSection content={cta} />
        </Layout>
    );
}

ContactPage.propTypes = {
    data: PropTypes.shape({
        hero: PropTypes.object.isRequired,
        industries: PropTypes.array.isRequired,
        cta: PropTypes.object.isRequired,
    }).isRequired,
};

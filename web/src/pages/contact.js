import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../page-layouts/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import ColumnGrid from '../components/columnGrid';
import CtaSection from '../components/ctaSection';
import ContactForm from '../components/contactForm';
import VideoFeature from '../components/videoFeature';

export default function ContactPage({ data }) {
    const { cta, hero, industries, feature1Image } = data;
    const content = {
        heading: 'Feature benefit Etiam egestas ligula tristique',
        body:
            'Suspendisse nunc eros, efficitur sed facilisis et, placerat non risus. Vivamus porttitor eleifend vehicula. Nulla in magna nisi. Vestibulum mollis felis in mi eleifend, sit amet vulputate quam sollicitudin. Mauris et ipsum bibendum, dapibus metus eget, consectetur nisl.',
    };

    return (
        <Layout>
            <SEO title="Contact Hubble" />
            <Hero content={hero} />
            <ColumnGrid content={industries} hasDescriptionText />
            <VideoFeature
                content={content}
                image={feature1Image}
                bgColor="var(--gray)"
            />
            <ContactForm />
            <CtaSection content={cta} />
        </Layout>
    );
}

ContactPage.propTypes = {
    data: PropTypes.shape({
        hero: PropTypes.object.isRequired,
        industries: PropTypes.array.isRequired,
        cta: PropTypes.object.isRequired,
        feature1Image: PropTypes.object.isRequired,
    }).isRequired,
};

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
                fluid(maxWidth: 300) {
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
            description: industriesHeading
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

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
    const { cta, form, hero, infoSection, videoSection } = data;

    return (
        <Layout>
            <SEO title="Contact Hubble" />
            <Hero content={hero} />
            <ColumnGrid content={infoSection} hasDescriptionText />
            <VideoFeature content={videoSection} />
            <ContactForm content={form} />
            <CtaSection content={cta} />
        </Layout>
    );
}

ContactPage.propTypes = {
    data: PropTypes.shape({
        cta: PropTypes.object.isRequired,
        form: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
        infoSection: PropTypes.array.isRequired,
        videoSection: PropTypes.object.isRequired,
    }).isRequired,
};

export const query = graphql`
    query ContactPage {
        hero: sanityContactPage {
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

        infoSection: sanityContactPage {
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

        videoSection: sanityContactPage {
            videoFeatureSection {
                title
                summary
                image {
                    asset {
                        fluid(maxWidth: 300) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }

        form: sanityContactPage {
            formHeading
        }

        cta: sanityContactPage {
            ctaHeading
            link {
                text
                url
            }
        }
    }
`;

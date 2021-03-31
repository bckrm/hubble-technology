import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from '../page-layouts/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import ColumnGrid from '../components/columnGrid';
import ContactForm from '../components/contactForm';
import VideoFeature from '../components/videoFeature';
import CurveMask from '../components/svgs/curveMask';

const MaskWrapper = styled.section`
    ${tw`bg-black-1 justify-center mt-56 py-32 relative text-white`}
`;

export default function ContactPage({ data }) {
    const { form, hero, infoSection, videoSection } = data;

    return (
        <Layout>
            <SEO title="Contact Hubble" />
            <Hero content={hero} />
            <ColumnGrid content={infoSection} hasDescriptionText />
            <VideoFeature content={videoSection} />
            <ContactForm content={form} />
            <MaskWrapper>
                <CurveMask color="var(--darkGray)" isInverted isTop />
            </MaskWrapper>
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
    }
`;

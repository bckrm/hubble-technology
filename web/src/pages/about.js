import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../page-layouts/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import FullWidthImage from '../components/fullWidthImage';
import ImageGrid4Col from '../components/imageGrid-4col';
import CtaSection from '../components/ctaSection';

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

        team: sanityAboutPage(team: {}) {
            dataObj: team {
                heading
                items: teamMembers {
                    id
                    name
                    position
                    image {
                        asset {
                            fluid(maxWidth: 275, maxHeight: 275) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
            }
        }

        investors: sanityAboutPage {
            dataObj: investor {
                heading
                items: investors {
                    id
                    name
                    position
                    image {
                        asset {
                            fluid(maxHeight: 275, maxWidth: 275) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
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
    }
`;

export default function AboutPage({ data }) {
    const {
        cta,
        fullWidthImage,
        hero,
        // investors,
        team,
    } = data;

    return (
        <Layout>
            <SEO title="Hubble Technology" />
            <Hero content={hero} />
            <FullWidthImage content={fullWidthImage} />
            <ImageGrid4Col content={team} bgColor="var(--gray)" />
            {/* <ImageGrid4Col content={investors} /> */}
            {/* to do add this back when its time */}
            <CtaSection content={cta} />
        </Layout>
    );
}

AboutPage.propTypes = {
    data: PropTypes.shape({
        cta: PropTypes.object.isRequired,
        fullWidthImage: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
        // investors: PropTypes.object.isRequired,
        team: PropTypes.object.isRequired,
    }).isRequired,
};

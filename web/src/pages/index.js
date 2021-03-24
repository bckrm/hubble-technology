import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../page-layouts/layout';
import SEO from '../components/seo';
import IndexHero from '../components/index/indexHero';
import IndexIntro from '../components/index/indexIntro';
import IndexFeatures from '../components/index/indexFeatures';
import Bio from '../components/bio';
import ColumnGrid from '../components/columnGrid';
import CtaSection from '../components/ctaSection';

export default function IndexPage({ data }) {
    const {
        cta,
        featuredBio,
        featuresContent,
        heroContent,
        heroImage: { heroImage },
        industries,
        introContent,
    } = data;
    return (
        <Layout>
            <SEO title="Hubble Technology" />
            <IndexHero bgImage={heroImage} content={heroContent} />
            <IndexIntro content={introContent} />
            <IndexFeatures content={featuresContent} />
            <Bio content={featuredBio} />
            <ColumnGrid content={industries} />
            <CtaSection content={cta} />
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

        featuresContent: sanityIndexPage {
            featuresHeading
            features {
                id
                navHeading
                bodyHeading
                link {
                    text
                    url
                }
                _rawBody
                image {
                    asset {
                        fluid(maxWidth: 500) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }

        featuredBio: sanityIndexPage {
            featuredBio {
                name
                heading
                _rawBody
                link {
                    text
                    url
                }
                image {
                    asset {
                        fluid(maxWidth: 350) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                bgImage {
                    asset {
                        fluid(maxWidth: 2000) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }

        industries: sanityIndexPage {
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
        cta: sanityIndexPage {
            ctaHeading
            link {
                text
                url
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        cta: PropTypes.object.isRequired,
        featuredBio: PropTypes.object.isRequired,
        featuresContent: PropTypes.object.isRequired,
        heroImage: PropTypes.shape({
            heroImage: PropTypes.object.isRequired,
        }),
        heroContent: PropTypes.object.isRequired,
        industries: PropTypes.array.isRequired,
        introContent: PropTypes.object.isRequired,
    }).isRequired,
};

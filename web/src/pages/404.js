import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import tw from 'twin.macro';
import PropTypes from 'prop-types';

import Layout from '../page-layouts/layout';
import Hero from '../components/hero';
import CtaSection from '../components/ctaSection';

const Wrapper = styled.div`
    ${tw`flex flex-col justify-center items-center content-center`}
`;

const StyledHeading = styled.h2`
    ${tw`font-bold text-center text-5xl w-2/4 mb-4`}

    line-height: 3.75rem;
    max-width: 58rem;
`;

const StyledP = styled.p`
    ${tw`text-2xl mb-28`}

    line-height: 150%;
`;

// markup
export default function NotFoundPage({ data }) {
    const { cta, fourohfour, hero } = data;
    return (
        <Layout>
            <Hero content={hero} />
            <Wrapper>
                <Img fluid={fourohfour.childImageSharp.fluid} />
                <StyledHeading>
                    Didn’t find what you’re looking for?
                </StyledHeading>
                <StyledP>
                    This page doesn’t exist, click <Link to="/">here</Link> to
                    head back to the homepage{' '}
                </StyledP>
            </Wrapper>
            <CtaSection content={cta} />
        </Layout>
    );
}

NotFoundPage.propTypes = {
    data: PropTypes.shape({
        cta: PropTypes.object.isRequired,
        fourohfour: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired,
    }).isRequired,
};

export const query = graphql`
    query NotFoundPage {
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
        cta: sanityAboutPage {
            ctaHeading
            link {
                text
                url
            }
        }
        fourohfour: file(relativePath: { regex: "/404/" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

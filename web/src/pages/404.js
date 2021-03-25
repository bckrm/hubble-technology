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
    ${tw`container flex flex-col justify-center items-center content-center`}
`;

const StyledHeading = styled.h2`
    ${tw`text-5xl font-bold text-center lg:w-1/2 my-10`}
`;

const StyledP = styled.p`
    ${tw`text-2xl mb-12 text-center`}

    line-height: 150%;
`;

const StyledLink = styled(Link)`
    ${tw`text-green`}
`;

export default function NotFoundPage({ data }) {
    const { bodyImage, cta, hero } = data;
    return (
        <Layout>
            <Hero content={hero} />
            <Wrapper>
                <Img fixed={bodyImage.childImageSharp.fixed} />
                <StyledHeading>
                    Didn’t find what you’re looking for?
                </StyledHeading>
                <StyledP>
                    This page doesn’t exist,
                    <StyledLink to="/"> click here</StyledLink> to head back to
                    the homepage.
                </StyledP>
            </Wrapper>
            <CtaSection content={cta} />
        </Layout>
    );
}

NotFoundPage.propTypes = {
    data: PropTypes.shape({
        bodyImage: PropTypes.object.isRequired,
        cta: PropTypes.object.isRequired,
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
        bodyImage: file(relativePath: { regex: "/404/" }) {
            childImageSharp {
                fixed(width: 238, height: 296) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

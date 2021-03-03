import * as React from 'react';
import { graphql } from 'gatsby';

// import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';
import PropTypes from 'prop-types';

import Layout from '../page-layouts/layout';
import Hero from '../components/hero';

// const Main = styled.main`
//     ${tw`container`}

//     color: '#232129',
//     fontFamily: '-apple-system, Roboto, sans-serif, serif',
// `;

// const content = {
//     hero: `Have you lost your way?`,
//     body: `Let's get you back home!`,
// };

const StyledHeading = styled.h2`
    ${tw`font-bold text-5xl mb-12`}

    line-height: 3.75rem;
    max-width: 58rem;
`;

const StyledP = styled.p`
    ${tw`font-semibold md:max-w-3xl pb-16 lg:pb-24 text-2xl`}

    line-height: 150%;
`;

// markup
export default function NotFoundPage({ data }) {
    const { hero } = data;
    return (
        <Layout>
            <Hero content={hero} />
            <StyledHeading>Are you lost?</StyledHeading>
            <StyledP>Let&apos;s get you back home </StyledP>
        </Layout>
    );
}

NotFoundPage.propTypes = {
    data: PropTypes.shape({
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
    }
`;

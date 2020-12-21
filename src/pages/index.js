import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import Hero from '../components/hero';

export const query = graphql`
    query IndexQuery {
        heroImage: file(relativePath: { regex: "/Hero-Image/" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const GlobalStyles = createGlobalStyle`
    body {
        color: #ffffff;
    }
`;
export default function IndexPage({ data }) {
    const { heroImage } = data;

    return (
        <>
            <GlobalStyles />
            <Hero bgImage={heroImage} />
        </>
    );
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};

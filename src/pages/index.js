import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import Hero from '../components/hero';
import SubHero from '../components/subHero';

import 'fontsource-montserrat';
import 'fontsource-montserrat/600.css';
import 'fontsource-montserrat/700.css';
import 'fontsource-montserrat/800.css';

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
        background-color: #000000;
        color: #ffffff;
        font-family: 'Montserrat';
    }
`;
export default function IndexPage({ data }) {
    const { heroImage } = data;

    return (
        <>
            <GlobalStyles />
            <Hero bgImage={heroImage} />
            <SubHero />
        </>
    );
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
    }).isRequired,
};

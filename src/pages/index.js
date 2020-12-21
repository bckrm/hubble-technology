import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import Hero from '../components/hero';
import SubHero from '../components/subHero';
import FeaturesSection from '../components/featuresSection';

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
        feature1Image: file(relativePath: { regex: "/feature-1/" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        feature2Image: file(relativePath: { regex: "/feature-2/" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        feature3Image: file(relativePath: { regex: "/feature-3/" }) {
            childImageSharp {
                fluid(maxWidth: 500) {
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
    const { heroImage, feature1Image, feature2Image, feature3Image } = data;

    const featureImages = [feature1Image, feature2Image, feature3Image];

    return (
        <>
            <GlobalStyles />
            <Hero bgImage={heroImage} />
            <SubHero />
            <FeaturesSection images={featureImages} />
        </>
    );
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        feature1Image: PropTypes.object.isRequired,
        feature2Image: PropTypes.object.isRequired,
        feature3Image: PropTypes.object.isRequired,
    }).isRequired,
};

import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import SEO from '../components/seo';
import Contact from '../components/contact';
import Header from '../components/header';
// import Hero from '../components/hero';
import SubHero from '../components/subHero';
import FeaturesSection from '../components/featuresSection';
import Footer from '../components/footer';

import 'fontsource-montserrat';
import 'fontsource-montserrat/600.css';
import 'fontsource-montserrat/700.css';
import 'fontsource-montserrat/800.css';

export const query = graphql`
    query OldIndexQuery {
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
        processAnimation: file(
            relativePath: { regex: "/Process-Animation-4/" }
        ) {
            id
            relativePath
        }
    }
`;

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #04080D;
        ;
        color: #ffffff;
        font-family: 'Montserrat';
    }
`;
export default function OldIndexPage({ data }) {
    const {
        // heroImage,
        feature1Image,
        feature2Image,
        feature3Image,
        processAnimation,
    } = data;

    const featureImages = [feature1Image, feature2Image, feature3Image];

    return (
        <>
            <GlobalStyles />
            <SEO title="Hubble Technology" />
            <Header />
            {/* <Hero bgImage={heroImage} /> */}
            <SubHero animation={processAnimation} />
            <FeaturesSection images={featureImages} />
            <Contact />
            <Footer />
        </>
    );
}

OldIndexPage.propTypes = {
    data: PropTypes.shape({
        heroImage: PropTypes.object.isRequired,
        feature1Image: PropTypes.object.isRequired,
        feature2Image: PropTypes.object.isRequired,
        feature3Image: PropTypes.object.isRequired,
        processAnimation: PropTypes.object.isRequired,
    }).isRequired,
};

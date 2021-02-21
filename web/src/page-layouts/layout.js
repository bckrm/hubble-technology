import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

import Header from '../components/header';
import Footer from '../components/footer';

import 'fontsource-montserrat';
import 'fontsource-montserrat/600.css';
import 'fontsource-montserrat/700.css';
import 'fontsource-montserrat/800.css';

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #ffffff;
        --black: #000000;
        --darkGray: #151417;
        --green: #00A09B;

    } 
    
    body {
        font-family: 'Montserrat', sans-serif;
    }
`;

export default function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

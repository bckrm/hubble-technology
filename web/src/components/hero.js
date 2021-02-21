import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import BackgroundImage from 'gatsby-background-image';
import CurveMask from './svgs/curveMask';

const BackgroundSection = styled(BackgroundImage)`
    ${tw`flex items-center justify-center min-h-1/2-screen`}
`;

const Heading = styled.h1`
    ${tw`font-bold text-5xl text-white leading-tight`}
`;

export default function Hero({ content }) {
    const {
        heading,
        image: {
            asset: { fluid: imageData },
        },
    } = content;

    return (
        <BackgroundSection Tag="section" fluid={imageData}>
            <Heading>{heading}</Heading>
            <CurveMask color="var(--white)" />
        </BackgroundSection>
    );
}

Hero.propTypes = {
    content: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired,
    }).isRequired,
};

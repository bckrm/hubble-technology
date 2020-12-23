import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import BackgroundImage from 'gatsby-background-image';

const content = {
    hero: ['Digital asset management at the speed of business'],
    body: [
        `Resilient businesses require a trusted, intelligent and thorough understanding of the digital assets that are at the heart of their operations. Whether they are enabling security, infrastructure operations, or business process automation, they need to be understood – allowing full recognition of their value, secured and maintained.`,
        `Ready to see your digital assets in a new light?`,
        `let’s do it`,
    ],
};

const StyledBackgroundSection = styled(BackgroundImage)`
    ${tw`flex flex-col justify-center min-h-screen pt-40 md:pt-0`}
`;

const StyledContainer = styled.div`
    ${tw`container mx-auto px-4 lg:px-2 2xl:px-0`}
`;

const StyledHeading = styled.h1`
    ${tw`font-bold mb-8 text-5xl md:max-w-2xl`}

    line-height: 3.75rem
`;

const StyledP = styled.p`
    ${tw`font-semibold md:max-w-3xl mb-8 text-2xl`}

    line-height: 150%;
`;

const StyledPExtraBold = styled(StyledP)`
    ${tw`font-extrabold`}
`;

const StyledCTA = styled.a`
    ${tw`cursor-pointer py-2 px-6 max-w-max mt-16 uppercase tracking-widest`}

    background: #00A09B;
    transition: background 500ms ease-out;

    &:hover {
        background: #027874;
    }
`;

export default function Hero({ bgImage }) {
    return (
        <StyledBackgroundSection
            id="hero"
            fluid={bgImage.childImageSharp.fluid}
        >
            <StyledContainer>
                <StyledHeading>{content.hero.join(', ')}</StyledHeading>
                <StyledP>{content.body[0]}</StyledP>
                <StyledPExtraBold>{content.body[1]}</StyledPExtraBold>
                <StyledCTA href="#contact">{content.body[2]}</StyledCTA>
            </StyledContainer>
        </StyledBackgroundSection>
    );
}

Hero.propTypes = {
    bgImage: PropTypes.object.isRequired,
};

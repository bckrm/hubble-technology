import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import BackgroundImage from 'gatsby-background-image';

const content = {
    hero: ['Unlock the value of your asset data', 'in one visual dashboard'],
    body: [
        'Today’s leading enterprises need actionable insight across their digital ecosystem to make informed decisions around security, infrastructure, and finance.',
        'Asset management systems trap data in itemized lists, hiding the relationships and dynamic nature of digital assets.',
        'Ready to see your assets in a new light?',
        `Let's do it`,
    ],
};

const StyledBackgroundSection = styled(BackgroundImage)`
    ${tw`flex flex-col justify-center min-h-screen`}
`;

const StyledContainer = styled.div`
    ${tw`container mx-auto px-4 md:px-0`}
`;

const StyledHeading = styled.h1`
    ${tw`mb-8 text-5xl`}

    line-height: 3.75rem
`;

const StyledP = styled.p`
    ${tw`md:max-w-3xl mb-8 text-2xl`}

    line-height: 1.9rem
`;

const StyledCTA = styled(StyledP)`
    ${tw`py-2 px-6 max-w-max uppercase`}

    background: #00A09B;
`;

export default function Hero({ bgImage }) {
    return (
        <StyledBackgroundSection fluid={bgImage.childImageSharp.fluid}>
            <StyledContainer>
                <StyledHeading>{content.hero.join(', ')}</StyledHeading>
                <StyledP>{content.body[0]}</StyledP>
                <StyledP>{content.body[1]}</StyledP>
                <StyledP style={{ fontWeight: `bold` }}>
                    {content.body[2]}
                </StyledP>
                <StyledCTA>{content.body[3]}</StyledCTA>
            </StyledContainer>
        </StyledBackgroundSection>
    );
}

Hero.propTypes = {
    bgImage: PropTypes.object.isRequired,
};

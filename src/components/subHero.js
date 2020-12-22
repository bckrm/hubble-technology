/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import Video from '../images/Process-Animation-3.mp4';

const content = {
    hero: 'Asset Management at the speed of business',
};

const StyledSection = styled.section`
    ${tw`container mb-32 mx-auto text-center`}
`;

const StyledHeading = styled.h2`
    ${tw`font-bold text-5xl mb-12 mx-auto max-w-2xl`}

    line-height: 2.75rem;
`;

export default function SubHero() {
    return (
        <StyledSection>
            <StyledHeading>{content.hero}</StyledHeading>
            <video autoPlay>
                <source src={Video} type="video/mp4" />
            </video>
        </StyledSection>
    );
}

import React from 'react';

import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

const content = {
    hero: 'Asset Management at the speed of business',
};

const StyledSection = styled.section`
    ${tw`container mx-auto text-center`}
`;

const StyledHeading = styled.h2`
    ${tw`font-bold text-5xl mb-12 mx-auto max-w-2xl`}

    line-height: 2.75rem;
`;

const AnimPlaceholder = styled.div`
    ${tw`bg-gray-500 h-80 w-full`}
`;

export default function SubHero() {
    return (
        <StyledSection>
            <StyledHeading>{content.hero}</StyledHeading>
            <AnimPlaceholder />
        </StyledSection>
    );
}

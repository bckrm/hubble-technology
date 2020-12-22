/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from 'react';
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

// const AnimPlaceholder = styled.div`
//     ${tw`bg-gray-500 h-80 w-full`}
// `;

export default function SubHero() {
    const ref = useRef();

    const handleScroll = () => {
        const elementTop = ref.current.getBoundingClientRect().top;
        const played = ref.current.played.length;

        if (elementTop < 400 && played < 1) {
            ref.current.play();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <StyledSection>
            <StyledHeading>{content.hero}</StyledHeading>
            <video ref={ref}>
                <source src={Video} type="video/mp4" />
            </video>
        </StyledSection>
    );
}

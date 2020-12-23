/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import Video from '../images/Process-Animation-4.mp4';

const content = {
    hero: 'Unlock the value of your asset data, in one visual dashboard',
    body: `Previously, asset management systems trapped data in itemized lists, hiding the relationships between and dynamic nature of an enterprise's digital assets. Hubble's asset intelligence platform brings those relationships to the surface, providing a comprehensive view of an organization’s assets—and the connections between them.`,
};

const StyledSection = styled.section`
    ${tw`mb-32 pt-20`}

    background: linear-gradient(180deg, #000000 10%, #04080D 40%);
`;

const InnerWrapper = styled.div`
    ${tw`container mx-auto px-4 lg:px-2 2xl:px-0`}
`;

const StyledHeading = styled.h2`
    ${tw`font-bold text-5xl mb-12`}

    line-height: 2.75rem;
    max-width: 58rem;
`;

const StyledP = styled.p`
    ${tw`font-semibold md:max-w-3xl pb-48 text-2xl`}

    line-height: 150%;
`;

export default function SubHero() {
    const target = useRef();
    const observer = useRef();

    useEffect(() => {
        // to avoid error during gatsby build we need to assign current during useEffect hook
        observer.current = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting) {
                    playVideo();
                }
            },
            {
                threshold: 1,
            },
        );
    });

    function playVideo() {
        target.current.play();
    }

    useEffect(() => {
        const currentTarget = target.current;
        const currentObserver = observer.current;

        if (target) {
            currentObserver.observe(currentTarget);
        }

        return () => {
            currentObserver.unobserve(currentTarget);
        };
    }, [target]);

    return (
        <StyledSection>
            <InnerWrapper>
                <StyledHeading>{content.hero}</StyledHeading>
                <StyledP>{content.body}</StyledP>
                <video muted playsInline ref={target}>
                    <source src={Video} type="video/mp4" />
                </video>
            </InnerWrapper>
        </StyledSection>
    );
}

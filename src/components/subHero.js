/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import Video from '../images/process-animation.webm';

const content = {
    hero: `Understand your assets in a feature-rich platform`,
    body: `Existing asset management systems are incomplete, lack context and are expensive to operate. Hubble's asset intelligence platform sheds a new light on an enterprise technology stack, providing a comprehensive view of an organization’s assets, enabling for an enhanced institutional understanding and informed decision making.`,
};

const StyledSection = styled.section`
    ${tw`pt-20`}

    background: linear-gradient(180deg, #000000 10%, #04080D 40%);
`;

const InnerWrapper = styled.div`
    ${tw`container mx-auto px-4 lg:px-2 2xl:px-0`}
`;

const StyledHeading = styled.h2`
    ${tw`font-bold text-5xl mb-12`}

    line-height: 3.75rem;
    max-width: 58rem;
`;

const StyledP = styled.p`
    ${tw`font-semibold md:max-w-3xl pb-16 lg:pb-24 text-2xl`}

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

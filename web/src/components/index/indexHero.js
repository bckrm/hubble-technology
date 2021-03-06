import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import BackgroundImage from 'gatsby-background-image';
import BlockText from '../block-content/blockText';
import HpHeroMask from '../svgs/hpHeroMask';

const BackgroundSection = styled(BackgroundImage)`
    ${tw`flex flex-col justify-end mb-56 pb-20 2xl:pb-0 pt-40 md:pt-0 text-white`}

    @media screen and (min-width: 1440px) {
        justify-content: center;
    }
`;

const Container = styled.div`
    ${tw`container mx-auto md:my-28`}
`;

const Heading = styled.h1`
    ${tw`font-bold mb-4 text-5xl md:max-w-2xl`}

    @media screen and (min-width: 768px) {
        line-height: 3.75rem;
    }
`;

const Body = styled.div`
    ${tw`font-normal md:max-w-3xl mb-8 text-2xl`}

    line-height: 150%;

    p {
        margin-bottom: 2rem;
    }
`;

const Link = styled.a`
    ${tw`cursor-pointer py-2 px-6 max-w-max mt-16 tracking-widest`}

    background: #00A09B;
    transition: background 500ms ease-out;

    &:hover {
        background: #027874;
    }
`;

export default function IndexHero({ bgImage, content }) {
    const {
        asset: { fluid: imageData },
    } = bgImage;

    const { _rawHeroBody, heroCta, heroHeading } = content;

    return (
        <BackgroundSection id="hero" fluid={imageData}>
            <Container>
                <Heading>{heroHeading}</Heading>
                <Body>
                    <BlockText blocks={_rawHeroBody} />
                </Body>
                <Link href="/contact">{heroCta}</Link>
            </Container>
            {/* <InvertedCurveMask color="var(--black)" isHero /> */}
            <HpHeroMask />
        </BackgroundSection>
    );
}

IndexHero.propTypes = {
    bgImage: PropTypes.object.isRequired,
    content: PropTypes.object.isRequired,
};

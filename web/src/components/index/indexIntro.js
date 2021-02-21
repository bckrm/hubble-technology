import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image';
import BlockText from '../block-content/blockText';

const Section = styled.section`
    ${tw`container relative`}
`;

const Wrapper = styled.div`
    ${tw`relative lg:absolute lg:left-full lg:top-full lg:transform-gpu lg:-translate-y-full lg:-translate-x-full lg:w-1/2`}

    //todo move colors to tailwind config
    &:after {
        background: #00a09b;
        content: '';
        height: 0.25rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 1.5rem;
    }
`;

const Heading = styled.h2`
    ${tw`font-bold text-4xl mb-12`}
`;

export default function IndexIntro({ content }) {
    const {
        introHeading,
        introPlaceholderImage: {
            asset: { fluid: imageData },
        },
        _rawIntroBody,
    } = content;
    return (
        <Section>
            <Img fluid={imageData} />
            <Wrapper>
                <Heading>{introHeading}</Heading>
                <BlockText blocks={_rawIntroBody} />
            </Wrapper>
        </Section>
    );
}

IndexIntro.propTypes = {
    content: PropTypes.shape({
        introHeading: PropTypes.string.isRequired,
        introPlaceholderImage: PropTypes.object.isRequired,
        _rawIntroBody: PropTypes.array.isRequired,
    }).isRequired,
};

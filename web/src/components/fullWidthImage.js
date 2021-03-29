import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image';

const Section = styled.section`
    ${tw`container mb-40 relative`}
    .gatsby-image-wrapper {
        top: -10px;
    }
`;

const Wrapper = styled.div`
    ${tw`lg:transform lg:translate-y-1/4 lg:bottom-0 lg:absolute lg:w-1/2 lg:right-0`}
`;

const Heading = styled.h2`
    ${tw`capitalize font-bold mb-8 relative text-4xl text-black-3 leading-tight`}

    &:after {
        content: '';
        background: var(--green);
        height: 0.25rem;
        left: 0;
        position: absolute;
        top: 100%;
        transform: translateY(0.75rem);
        width: 1.5rem;
    }
`;
const Body = styled.p`
    ${tw`text-lg`}
`;

export default function FullWidthImage({ content }) {
    const {
        subHero: {
            body,
            heading,
            image: {
                asset: { fluid: imageData },
            },
        },
    } = content;

    return (
        <Section>
            <Img fluid={imageData} />
            <Wrapper>
                {heading && <Heading>{heading}</Heading>}
                {body && <Body>{body}</Body>}
            </Wrapper>
        </Section>
    );
}

FullWidthImage.propTypes = {
    content: PropTypes.shape({
        subHero: PropTypes.shape({
            body: PropTypes.string,
            heading: PropTypes.string,
            image: PropTypes.object.isRequired,
        }).isRequired,
    }).isRequired,
};

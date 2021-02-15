import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image';

const Section = styled.section`
    ${tw`container grid grid-cols-1 lg:grid-cols-5 gap-20 mb-40 text-black-2`}
`;

const StyledImg = styled(Img)`
    ${tw`lg:col-start-1 lg:col-end-3`}
`;
const BlockQuote = styled.blockquote`
    ${tw`lg:col-start-3 lg:col-end-7 flex flex-col justify-evenly`}
`;

const StyledQuote = styled.p`
    ${tw`text-3xl leading-normal pl-12 relative`}

    &:before,
    &:after {
        color: #00a09b;
        font-size: 8rem;
        font-weight: bold;
        line-height: 0.25;
        position: absolute;
        transform: translateY(100%) translateX(-50%);
    }

    &:before {
        content: open-quote;
        left: 0;
        top: 0;
    }

    &:after {
        bottom: 0;
        content: close-quote;
        right: 0;
    }
`;

const Citation = styled.div`
    ${tw`pl-12`}
`;

const Name = styled.p`
    ${tw`font-bold text-2xl leading-9`}
`;

const Title = styled.p`
    ${tw`italic text-xl leading-8`}
`;
export default function Quote({ content }) {
    const {
        featuredQuote: {
            image: {
                asset: { fluid: imageData },
            },
            name,
            quote,
            title,
        },
    } = content;
    return (
        <Section>
            <StyledImg fluid={imageData} />
            <BlockQuote>
                <StyledQuote>{quote}</StyledQuote>
                <Citation>
                    <Name>{name}</Name>
                    <Title>{title}</Title>
                </Citation>
            </BlockQuote>
        </Section>
    );
}

Quote.propTypes = {
    content: PropTypes.object.isRequired,
};

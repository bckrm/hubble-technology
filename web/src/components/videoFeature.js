import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from 'styled-components';
import tw from 'twin.macro';

const GridWrapper = styled.div`
    ${tw`grid grid-cols-2 grid-rows-1 my-16 h-5/6`}
    background: ${({ bgColor }) => bgColor};
`;

const ContentWrapper = styled.div`
    ${tw`col-start-2 col-span-1 w-9/12 justify-self-center self-center`}
`;

const StyledImg = styled(Img)`
    ${tw`col-start-1 col-span-1 my-20 w-8/12`}
`;

const StyledHeading = styled.h3`
    ${tw`font-bold leading-8 mb-8 relative text-3xl w-7/12`}
    &:after {
        content: '';
        position: absolute;
        width: 1.5rem;
        left: 0;
        bottom: -0.75rem;
        transform: translateY(100%);
        height: 0.25rem;
        background-color: #00a09b;
    }
`;

const StyledP = styled.p`
    ${tw`leading-6`}
`;

export default function VideoFeature({ bgColor, content, image }) {
    return (
        <GridWrapper bgColor={bgColor}>
            <ContentWrapper>
                <StyledHeading>{content.heading}</StyledHeading>
                <StyledP>{content.body}</StyledP>
            </ContentWrapper>
            <StyledImg fluid={image.childImageSharp.fluid} />
        </GridWrapper>
    );
}

VideoFeature.propTypes = {
    bgColor: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
};

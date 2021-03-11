import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from 'styled-components';
import tw from 'twin.macro';

// const GridWrapper = styled.div`
//     ${tw`lg:grid lg:grid-cols-2 lg:grid-rows-1 my-16 h-5/6 bg-gray-1`}
// `;

// const ContentWrapper = styled.div`
//     ${tw`lg:col-start-2 col-span-1 lg:w-9/12 mx-4 justify-self-center self-center`}
// `;

// const StyledImg = styled(Img)`
//     ${tw`col-start-1 col-span-1 lg:my-20 lg:w-8/12`}
// `;

// const StyledHeading = styled.h3`
//     ${tw`font-bold text-xl mb-8 leading-6 relative lg:text-3xl lg:w-7/12`}

//     &:after {
//         content: '';
//         position: absolute;
//         width: 1.5rem;
//         left: 0;
//         bottom: -0.75rem;
//         transform: translateY(100%);
//         height: 0.25rem;
//         background-color: #00a09b;
//     }
// `;

// const StyledP = styled.p`
//     ${tw`leading-6 text-xs lg:text-xl`}
// `;

const GridWrapper = styled.div`
    ${tw`min-w-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:my-16 lg:h-5/6 bg-gray-1`}
`;

const ContentWrapper = styled.div`
    ${tw`mx-4 lg:col-start-2 lg:col-span-1 lg:w-9/12 justify-self-center self-center`}
`;

const StyledImg = styled(Img)`
    ${tw`mx-4 lg:col-start-1 lg:col-span-1 my-7 mb-32 lg:my-20`}
`;

const StyledHeading = styled.h3`
    ${tw`font-bold text-xl leading-8 my-8 relative lg:text-3xl lg:w-4/5`}
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
    ${tw`leading-6 text-xs lg:text-xl`}
`;

export default function VideoFeature({ content, image }) {
    return (
        <GridWrapper>
            <ContentWrapper>
                <StyledHeading>{content.heading}</StyledHeading>
                <StyledP>{content.body}</StyledP>
            </ContentWrapper>
            <StyledImg fluid={image.childImageSharp.fluid} />
        </GridWrapper>
    );
}

VideoFeature.propTypes = {
    content: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
};

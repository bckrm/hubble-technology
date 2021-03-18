import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from 'styled-components';
import tw from 'twin.macro';

const Section = styled.section`
    ${tw`bg-gray-1`}
`;

const GridWrapper = styled.div`
    ${tw`container grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 lg:my-16 py-8`}
`;

const ContentWrapper = styled.div`
    ${tw`mx-4 lg:col-start-2 lg:col-span-1 lg:w-9/12 justify-self-center self-center`}
`;

const StyledImg = styled(Img)`
    ${tw`mx-4 lg:col-start-1 lg:col-span-1 my-7 mb-20 lg:my-20`}
`;

const StyledHeading = styled.h3`
    ${tw`font-bold text-xl leading-8 my-8 mt-12 relative lg:text-3xl lg:w-4/5`}

    &:after {
        content: '';
        position: absolute;
        width: 1.5rem;
        left: 0;
        bottom: -0.75rem;
        transform: translateY(100%);
        height: 0.25rem;
        background-color: var(--green);
    }
`;

const StyledP = styled.p`
    ${tw`leading-6 text-xs lg:text-xl`}
`;

export default function VideoFeature({ content }) {
    const {
        videoFeatureSection: {
            title,
            summary,
            image: {
                asset: { fluid: imageData },
            },
        },
    } = content;
    return (
        <Section>
            <GridWrapper>
                <ContentWrapper>
                    <StyledHeading>{title}</StyledHeading>
                    <StyledP>{summary}</StyledP>
                </ContentWrapper>
                <StyledImg fluid={imageData} />
            </GridWrapper>
        </Section>
    );
}

VideoFeature.propTypes = {
    content: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
};

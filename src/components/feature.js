import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

const GridWrapper = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-3 md:gap-5 mb-36`}

    @media screen and (min-width: 768px) {
        &:nth-child(odd) {
            .gatsby-image-wrapper {
                grid-column-start: 1;
                grid-column: span 2 / span 2;
                grid-row-start: 1;
            }

            .text-wrap {
                grid-column-start: 3;
            }
        }
    }
`;

const StyledImg = styled(Img)`
    ${tw`col-start-2 col-span-2`}
`;

const StyledHeading = styled.h3`
    ${tw`font-bold leading-8 mb-8 relative text-3xl`}

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

export default function Feature({ content, image }) {
    return (
        <GridWrapper>
            <div className="text-wrap">
                <StyledHeading>{content.heading}</StyledHeading>
                <StyledP>{content.body}</StyledP>
            </div>
            <StyledImg fluid={image.childImageSharp.fluid} />
        </GridWrapper>
    );
}

Feature.propTypes = {
    content: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
};

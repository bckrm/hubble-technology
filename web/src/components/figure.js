import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image';

const StyledFigure = styled.figure`
    ${tw`text-center`}
`;

const StyledImg = styled(Img)`
    ${tw`rounded-full mb-9 mx-auto w-1/2 lg:w-full`}
`;

const Heading = styled.h3`
    ${tw`font-bold mb-4 text-2xl leading-9`}
`;

const Body = styled.p`
    ${tw`text-xl`}
`;

export default function Figure({ content }) {
    const {
        description,
        heading,
        image: {
            asset: { fluid: imageData },
        },
    } = content;
    return (
        <StyledFigure>
            <StyledImg fluid={imageData} />
            {heading && <Heading>{heading}</Heading>}
            {description && <Body>{description}</Body>}
        </StyledFigure>
    );
}

Figure.propTypes = {
    content: PropTypes.shape({
        description: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired,
    }).isRequired,
};

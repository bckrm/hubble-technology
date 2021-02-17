import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import BlockText from './block-content/blockText';
import CurveMask from './svgs/curveMask';

// todo: height/positioning issues
// need it increase height of section to match layout but adding instrinsic height creates layout issues across different screen sizes
const StyledBackground = styled(BackgroundImage)`
    ${tw`h-full text-white`}

    margin-bottom: 10rem;
`;

const Grid = styled.div`
    ${tw`container grid grid-cols-1 lg:grid-cols-2 gap-10 relative`}
`;

const Heading = styled.h2`
    ${tw`font-bold leading-normal mb-5 text-4xl`}
`;

const Body = styled.div`
    ${tw`flex flex-col justify-center`}

    p {
        font-size: 1.25rem;
        line-height: 1.5;
        margin-bottom: 1.25rem;
    }
`;

export default function Bio({ content }) {
    const {
        featuredBio: {
            bgImage: {
                asset: { fluid: bgImageData },
            },
            heading,
            image: {
                asset: { fluid: imageData },
            },
            link: { text, url },
            _rawBody,
        },
    } = content;

    return (
        <StyledBackground Tag="section" fluid={bgImageData}>
            <CurveMask color="var(--white)" isTop />
            <CurveMask color="var(--white)" />
            <Grid>
                <Body>
                    <Heading>{heading}</Heading>
                    <BlockText blocks={_rawBody} />
                    <Link to={url}>{text}</Link>
                </Body>
                <Img fluid={imageData} />
            </Grid>
        </StyledBackground>
    );
}

Bio.propTypes = {
    content: PropTypes.shape({
        featuredBio: PropTypes.object.isRequired,
    }).isRequired,
};

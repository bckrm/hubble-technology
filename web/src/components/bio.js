import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import BlockText from './block-content/blockText';
import CurveMask from './svgs/curveMask';
import InvertedCurveMask from './svgs/invertedCurveMask';

const StyledBackground = styled(BackgroundImage)`
    ${tw`h-full text-white`}

    margin-bottom: 10rem;
`;

const Grid = styled.div`
    ${tw`container grid grid-cols-1 md:grid-cols-12 items-center justify-items-center mb-8 md:mb-0`}
`;

const Heading = styled.h2`
    ${tw`font-bold leading-normal mb-5 text-4xl`}
`;

const Body = styled.div`
    ${tw`md:col-start-1 md:col-end-6 md:row-start-1 flex flex-col justify-center mb-8 md:mb-0 md:pb-20 md:pt-40`}

    p {
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1.25rem;
    }
`;

const StyledImg = styled(Img)`
    ${tw`h-auto rounded-full max-w-full h-4/6 md:max-w-none md:col-start-10 md:h-96 md:w-96 md:mb-20 `}
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
            <InvertedCurveMask color="var(--white)" isTop />
            <CurveMask color="var(--white)" />
            <Grid>
                <StyledImg fluid={imageData} style={{ width: '400px' }} />
                <Body>
                    <Heading>{heading}</Heading>
                    <BlockText blocks={_rawBody} />
                    <Link to={url}>{text}</Link>
                </Body>
            </Grid>
        </StyledBackground>
    );
}

Bio.propTypes = {
    content: PropTypes.shape({
        featuredBio: PropTypes.object.isRequired,
    }).isRequired,
};

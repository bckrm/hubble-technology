import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion, AnimatePresence } from 'framer-motion';

import Img from 'gatsby-image';
import BlockText from './block-content/blockText';

const Grid = styled.div`
    ${tw`grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0`}
`;

const Container = styled.div`
    ${tw`row-start-2 lg:row-start-1`}
`;

const Heading = styled.h4`
    ${tw`font-bold leading-tight pb-12 relative text-3xl`}

    &:after {
        background: #6e2774;
        content: '';
        height: 0.25rem;
        left: 0;
        position: absolute;
        top: 70%;
        transform: translateY(-100%);
        width: 1.5rem;
    }
`;

const Body = styled.div`
    li {
        font-size: 1.125rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        padding-left: 0.75rem;
        position: relative;

        // todo: move colors to css custom properties
        &:before {
            background: #000000;
            border-radius: 100%;
            content: '';
            height: 0.25rem;
            left: 0;
            position: absolute;
            top: 50%;
            transform: translateY(-100%);
            width: 0.25rem;
        }
    }
`;

export default function IndexFeature({ content, isOpen }) {
    const {
        bodyHeading,
        image: {
            asset: { fluid: imageData },
        },
        link: { text, url },
        _rawBody,
    } = content;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                >
                    <Grid>
                        <Container>
                            <Heading>{bodyHeading}</Heading>
                            <Body>
                                <BlockText blocks={_rawBody} />
                            </Body>
                            <Link to={url}>{text}</Link>
                        </Container>
                        <Img fluid={imageData} />
                    </Grid>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

IndexFeature.propTypes = {
    content: PropTypes.shape({
        bodyHeading: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired,
        link: PropTypes.object.isRequired,
        _rawBody: PropTypes.array.isRequired,
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
};

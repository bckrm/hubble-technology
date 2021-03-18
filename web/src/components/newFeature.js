import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';
import { motion, AnimatePresence } from 'framer-motion';

const Grid = styled.div`
    ${tw`grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0`}
`;

const Container = styled.div`
    ${tw`row-start-2 lg:row-start-1`}
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

export default function NewFeature({ content, isOpen }) {
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
                    {content.featuresBenefitsItems.map((item) => (
                        <Grid>
                            <Container>
                                <StyledHeading>{item.heading}</StyledHeading>
                                <StyledP>{item.body}</StyledP>
                            </Container>
                            <Img fluid={item.image.asset.fluid} />
                        </Grid>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

NewFeature.propTypes = {
    content: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

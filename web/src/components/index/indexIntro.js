import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion, AnimatePresence } from 'framer-motion';

import BlockText from '../block-content/blockText';
import IndexAnimation from '../indexAnimation';

const Section = styled.section`
    ${tw`container relative`}
`;

const AnimationWrapper = styled.div`
    ${tw`w-full md:w-10/12`}
    @media only screen and (min-width: 1024px) {
        transform: translateX(-5%);
    }
`;
const Wrapper = styled.div`
    ${tw`relative p-4 lg:absolute lg:top-full lg:left-full lg:transform-gpu lg:-translate-y-1/2 lg:-translate-x-full lg:w-1/2`}

    .motion-wrapper {
        position: relative;
        &:after {
            background: #00a09b;
            content: '';
            height: 0.25rem;
            position: absolute;
            top: 0;
            transform: translateY(-1.5rem);
            width: 1.5rem;
        }
    }
`;

const Heading = styled.h2`
    ${tw`font-bold text-4xl mb-12`}
`;

export default function IndexIntro({ content }) {
    const [isFinishedAnimation, setIsFinishedAnimation] = useState(false);
    const { introHeading, _rawIntroBody } = content;
    return (
        <Section>
            <AnimationWrapper>
                <IndexAnimation
                    setIsFinishedAnimation={setIsFinishedAnimation}
                />
            </AnimationWrapper>
            <Wrapper>
                <Heading>{introHeading}</Heading>
                <AnimatePresence>
                    {isFinishedAnimation && (
                        <motion.div
                            className="motion-wrapper"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{
                                duration: 1,
                            }}
                        >
                            <BlockText blocks={_rawIntroBody} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Wrapper>
        </Section>
    );
}

IndexIntro.propTypes = {
    content: PropTypes.shape({
        introHeading: PropTypes.string.isRequired,
        _rawIntroBody: PropTypes.array.isRequired,
    }).isRequired,
};

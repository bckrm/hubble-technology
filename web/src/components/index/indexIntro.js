import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion, AnimatePresence } from 'framer-motion';

// import Img from 'gatsby-image';
import BlockText from '../block-content/blockText';
import IndexAnimation from '../indexAnimation';

const Section = styled.section`
    ${tw`container relative`}
`;

const Wrapper = styled.div`
    ${tw`relative mt-20 lg:absolute lg:left-full lg:top-full lg:transform-gpu lg:-translate-y-full lg:-translate-x-full lg:w-1/2`}

    //todo move colors to tailwind config
    &:after {
        background: #00a09b;
        content: '';
        height: 0.25rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 1.5rem;
    }
`;

const Heading = styled.h2`
    ${tw`font-bold text-4xl mb-12`}
`;

export default function IndexIntro({ content }) {
    const [finishedAnimation, setFinishedAnimation] = useState(false);
    const { introHeading, _rawIntroBody } = content;
    return (
        <Section>
            <IndexAnimation setFinishedAnimation={setFinishedAnimation} />
            <Wrapper>
                <Heading>{introHeading}</Heading>
                <AnimatePresence>
                    {finishedAnimation && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{
                                duration: 2,
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

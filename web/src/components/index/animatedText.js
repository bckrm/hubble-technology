import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedTextHeading = styled.h2`
    ${tw`font-bold leading-tight mb-4 text-4xl text-center`}
`;

export default function AnimatedText({ isOpen, text }) {
    return (
        <AnimatePresence>
            <div className="absolute left-1/2 -translate-x-1/2">
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                    >
                        <AnimatedTextHeading>{text}</AnimatedTextHeading>
                    </motion.div>
                )}
            </div>
        </AnimatePresence>
    );
}

AnimatedText.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

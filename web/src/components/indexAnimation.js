import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import hubble from '../animations/Homepage-Editcheck.json';

export default function IndexAnimation({ setIsFinishedAnimation }) {
    const indexContainer = useRef(null);

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    if (inView) {
        indexContainer.current.play();
    }

    return (
        <div ref={ref}>
            <Lottie
                animationData={hubble}
                loop={false}
                autoplay={false}
                lottieRef={indexContainer}
                onComplete={() => setIsFinishedAnimation(true)}
            />
        </div>
    );
}

IndexAnimation.propTypes = {
    setIsFinishedAnimation: PropTypes.func.isRequired,
};

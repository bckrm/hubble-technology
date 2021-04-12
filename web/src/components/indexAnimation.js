import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import hubble from '../animations/hubble_newnewedit.json';

export default function IndexAnimation({ setIsFinishedAnimation }) {
    const indexContainer = useRef(null);

    // let percentage = '-15%';

    // const checkWidth = () => {
    //     if (window.innerWidth < 1000) {
    //         percentage = '0%';
    //     } else {
    //         percentage = '-15%';
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('resize', checkWidth);

    //     return () => {
    //         window.removeEventListener('resize', checkWidth);
    //     };
    // });
    const percentage = '-15%';

    const styles = {
        transform: `translateX(${percentage})`,
    };

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
                style={styles}
            />
        </div>
    );
}

IndexAnimation.propTypes = {
    setIsFinishedAnimation: PropTypes.func.isRequired,
};

/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const Svg = styled.svg`
    ${tw`absolute w-full`}
 
    top: ${({ isTop }) => (isTop ? '0' : '90%')};
  
    transform: ${({ isTop }) =>
        isTop ? 'translateY(-50%) scale(1)' : 'scale(1)'};
    
    @media only screen and (min-width: 1024px) {
        top: ${({ isHero, isTop }) => (isHero ? '96%' : isTop ? '0' : '90%')}


`;

export default function InvertedCurveMask({ color, isTop, isHero }) {
    const [aspectRatioValue, setAspectRatioValue] = useState('none');

    function viewPortWidth() {
        return window.innerWidth;
    }

    useEffect(() => {
        function setValue() {
            const width = viewPortWidth();

            if (width < 1080) {
                setAspectRatioValue('xMidYMid meet');
            } else {
                setAspectRatioValue('none');
            }
        }
        setValue();

        window.addEventListener('resize', setValue);

        return () => {
            window.removeEventListener('resize', setValue);
        };
    }, []);

    return (
        <Svg
            width="100%"
            height="252"
            viewBox="0 0 1440 252"
            preserveAspectRatio={aspectRatioValue}
            fill="none"
            isTop={isTop}
            isHero={isHero}
        >
            <path
                d="M-19 211.637V0H1440V191.991C1395.53 175.561 1249.76 142.699 1022.49 142.699C738.402 142.699 545.12 252 348.286 252C151.453 252 42.8908 230.211 -19 211.637Z"
                fill={color}
            />
        </Svg>
    );
}

InvertedCurveMask.defaultProps = {
    isHero: false,
};

InvertedCurveMask.propTypes = {
    color: PropTypes.string.isRequired,
    isTop: PropTypes.bool.isRequired,
    isHero: PropTypes.bool,
};

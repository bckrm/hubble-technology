/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const Svg = styled.svg`
    ${tw`absolute w-full`}

    top: ${({ isTop }) => (isTop ? '0' : '100%')};
    transform: ${({ isInverted, isTop }) =>
        isTop && isInverted
            ? 'translateY(-50%) scale(-1)'
            : isTop
            ? 'translateY(-50%)'
            : 'translateY(-50%) scale(-1)'};
`;

export default function CurveMask({ color, isTop, isInverted }) {
    return (
        <Svg
            width="1440"
            height="252"
            viewBox="0 0 1440 252"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            isInverted={isInverted}
            isTop={isTop}
        >
            <path
                d="M-19 211.637V0H1440V191.991C1395.53 175.561 1249.76 142.699 1022.49 142.699C738.402 142.699 545.12 252 348.286 252C151.453 252 42.8908 230.211 -19 211.637Z"
                fill={color}
            />
        </Svg>
    );
}

CurveMask.propTypes = {
    color: PropTypes.string.isRequired,
    isInverted: PropTypes.bool.isRequired,
    isTop: PropTypes.bool.isRequired,
};

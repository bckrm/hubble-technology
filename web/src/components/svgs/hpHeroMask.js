import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Svg = styled.svg`
    ${tw`absolute w-full`}

    top: ${({ isTop }) => (isTop ? '0' : '94%')};

    @media screen and (min-width: 1024px) {
        top: 96%;
    }
`;

export default function HpHeroMask() {
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
            height="179"
            viewBox="0 0 1459 179"
            preserveAspectRatio={aspectRatioValue}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 138.137V0H1459V118.491C1414.53 102.061 1268.76 69.1988 1041.49 69.1988C757.402 69.1988 564.12 178.5 367.286 178.5C170.453 178.5 61.8908 156.711 0 138.137Z"
                fill="black"
            />
        </Svg>
    );
}

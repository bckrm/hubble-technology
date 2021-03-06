import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import {
    MdKeyboardArrowDown,
    MdNavigateBefore,
    MdNavigateNext,
} from 'react-icons/md';

import AnimatedText from './animatedText';
import IndexFeature from './indexFeature';

const Section = styled.section`
    ${tw`container my-24 md:my-44 pt-8 relative`}
`;

const Heading = styled.h2`
    ${tw`font-bold leading-tight mb-24 text-4xl text-center`}
`;

const GridWrapper = styled.div`
    ${tw`overflow-hidden relative w-full`}
`;

const Grid = styled.div`
    ${tw`flex flex-row lg:grid lg:grid-cols-4 lg:gap-4 transition-transform transform-gpu`}

    transform: ${({ activeSlide }) => `translateX(-${activeSlide * 100}%)`}
`;

const Controls = styled.div`
    ${tw`flex justify-between lg:hidden`}
`;

const ForwardButton = styled(MdNavigateNext)`
    ${tw`absolute h-14 w-14 right-0 transform -translate-y-3 translate-x-4 z-10`}
    opacity: ${({ isActive }) => (isActive ? '1' : '.5')};
    pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
`;

const BackwardButton = styled(MdNavigateBefore)`
    ${tw`absolute h-14 w-14 left-0 transform -translate-y-3 -translate-x-4 z-10`}

    opacity: ${({ isActive }) => (isActive ? '1' : '.5')};
    pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
`;

const GridItem = styled.h3`
    ${tw`lg:cursor-pointer w-full flex-none font-bold leading-tight mb-10 lg:mb-36 px-8 lg:px-0 relative text-2xl text-center`}

    color: ${({ isActiveTab }) => (isActiveTab ? 'currentColor' : '#BDBDBD')}
`;

const DownChevron = styled(MdKeyboardArrowDown)`
    ${tw`absolute invisible lg:visible pointer-events-none h-24 left-1/2 opacity-0 lg:opacity-100 top-full transform -translate-x-1/2 w-24`}

    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
`;

export default function IndexFeatures({ content }) {
    const { animatedText, features, staticHeading } = content;

    const [activeTab, setActiveTab] = useState(features[0].id);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleForwardClick = () => {
        const currentSlide = activeSlide;
        const nextSlide = currentSlide + 1;
        setActiveSlide(nextSlide);
        setActiveTab(features[nextSlide].id);
    };

    const handleBackwardClick = () => {
        const currentSlide = activeSlide;
        const nextSlide = currentSlide - 1;
        setActiveSlide(nextSlide);
        setActiveTab(features[nextSlide].id);
    };

    const animatedTextArray = animatedText.split(',');

    const [activeText, setActiveText] = useState(animatedTextArray[0]);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (textIndex < animatedTextArray.length - 1) {
                setActiveText(animatedTextArray[textIndex + 1]);
                setTextIndex(textIndex + 1);
            } else {
                setActiveText(animatedTextArray[0]);
                setTextIndex(0);
            }
        }, 2000);
        // clearing interval
        return () => clearInterval(timer);
    });

    return (
        <Section>
            {animatedTextArray &&
                animatedTextArray.map((item) => {
                    const key = item.toLowerCase().split(' ').join('');
                    const currentActiveTextKey = activeText
                        .toLowerCase()
                        .split(' ')
                        .join('');
                    return (
                        <AnimatedText
                            isOpen={key === currentActiveTextKey}
                            text={item}
                            key={key}
                        />
                    );
                })}
            <Heading>{staticHeading}</Heading>
            <GridWrapper>
                <Controls>
                    <BackwardButton
                        isActive={activeSlide > 0}
                        onClick={handleBackwardClick}
                    />
                    <ForwardButton
                        isActive={activeSlide < 3}
                        onClick={handleForwardClick}
                    />
                </Controls>
                <Grid activeSlide={activeSlide}>
                    {features.map((feature) => {
                        return (
                            <GridItem
                                key={feature.id}
                                onClick={() => setActiveTab(feature.id)}
                                isActiveTab={activeTab === feature.id}
                            >
                                {feature.navHeading}
                                <DownChevron
                                    isActive={activeTab === feature.id}
                                />
                            </GridItem>
                        );
                    })}
                </Grid>
            </GridWrapper>
            {features.map((feature) => {
                return (
                    <IndexFeature
                        content={feature}
                        key={feature.id}
                        isOpen={activeTab === feature.id}
                    />
                );
            })}
        </Section>
    );
}

IndexFeatures.propTypes = {
    content: PropTypes.shape({
        animatedText: PropTypes.string.isRequired,
        features: PropTypes.array.isRequired,
        staticHeading: PropTypes.string.isRequired,
    }).isRequired,
};

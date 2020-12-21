import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import Feature from './feature';

const content = {
    heading: 'Highlights',
    features: [
        {
            heading: 'Compliance and Security',
            body:
                'Ensure compliance and security across the entire organization',
        },
        {
            heading: 'Digital Transformation',
            body:
                'Enable true digital transformation with real time asset data that helps you measure risk gaps against opportunities for innovation ',
        },
        {
            heading: 'Return on Investment',
            body:
                'See true ROI on digital asset investments with actionable tasks to maximize value ',
        },
    ],
};

const StyledSection = styled.section`
    ${tw`container mt-14 mx-auto px-4 md:px-0`}
`;

const StyledHeading = styled.h2`
    ${tw`mb-16 tracking-widest uppercase`}

    font-size: 2.75rem;
    line-height: 3rem;
`;

export default function FeaturesSection({ images }) {
    return (
        <StyledSection>
            <StyledHeading>{content.heading}</StyledHeading>
            {content.features.map((feature, index) => {
                return (
                    <Feature
                        content={feature}
                        image={images[index]}
                        key={`${feature.heading}`}
                    />
                );
            })}
        </StyledSection>
    );
}

FeaturesSection.propTypes = {
    images: PropTypes.array.isRequired,
};

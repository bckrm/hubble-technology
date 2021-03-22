import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import Feature from './feature';

const content = {
    heading: '',
    features: [
        {
            heading: 'Compliance and Security',
            body:
                'Ensure compliance and security across the entire organization. Infuse technology asset technology into your existing security investments, enabling enhanced situational awareness and super-charging security automation and orchestration.',
        },
        {
            heading: 'Digital Transformation',
            body:
                'Enable digital transformation with real time asset data that helps you identify opportunities for technology rationalization, innovation and transformation.',
        },
        {
            heading: 'Untrap Value',
            body:
                'Releasing trapped value is key to success in a digital world. Our platform is designed to unlock the value of your existing technology data to help power your business through asset intelligence.',
        },
    ],
};

const StyledSection = styled.section`
    ${tw`container mx-auto pt-24 lg:pt-36 px-4 lg:px-2 2xl:px-0`}
`;

const StyledHeading = styled.h2`
    ${tw`mb-16 tracking-widest uppercase`}

    font-size: 2.75rem;
    line-height: 3rem;
`;

export default function FeaturesSection({ images }) {
    return (
        <StyledSection id="why-hubble">
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
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

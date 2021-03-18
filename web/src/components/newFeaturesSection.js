import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import NewFeature from './newFeature';

const LinkWrapper = styled.div`
    ${tw`flex justify-around`}
`;

const StyledButton = styled.button`
    ${tw`text-black text-center`}
`;

const StyledSection = styled.section`
    ${tw`container mx-auto pt-24 lg:pt-36 px-4 lg:px-2 2xl:px-0`}
`;

const StyledHeading = styled.h2`
    ${tw`font-bold leading-tight mb-24 text-4xl text-center`}
`;

export default function NewFeaturesSection({ images, content }) {
    const {
        featuresBenefitsSection: { featuresBenefitsItems, Heading },
    } = content;

    const [activeTab, setActiveTab] = useState(featuresBenefitsItems[0].id);

    return (
        <StyledSection>
            <StyledHeading>{Heading}</StyledHeading>
            <LinkWrapper>
                {featuresBenefitsItems.map((feature, i) => {
                    return (
                        <StyledButton
                            onClick={() => setActiveTab(feature.id)}
                            key={feature[i]}
                            isActive={activeTab === feature.id}
                        >
                            {feature.title}
                        </StyledButton>
                    );
                })}
            </LinkWrapper>
            {featuresBenefitsItems.map((feature, i) => {
                return (
                    <NewFeature
                        content={feature}
                        image={images[i]}
                        key={`${feature.id}`}
                        isOpen={activeTab === feature.id}
                    />
                );
            })}
        </StyledSection>
    );
}

NewFeaturesSection.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    content: PropTypes.object.isRequired,
};

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import NewFeature from './newFeature';

const StyledSection = styled.section`
    ${tw`bg-gray-1 mx-auto pt-24 lg:pt-36 px-4 lg:px-2 2xl:px-0`}
`;

const StyledContainer = styled.div`
    ${tw`container`}
`;

const LinkWrapper = styled.div`
    ${tw`flex gap-10 justify-center my-8`}
`;

const StyledButton = styled.button`
    ${tw`text-gray-2 text-center font-semibold`}
    color: ${({ isActive }) => (isActive ? '#00A09B' : 'gray-2')}
`;

const StyledHeading = styled.h2`
    ${tw`font-bold leading-tight mb-4 text-4xl text-center`}
`;

export default function NewFeaturesSection({ content }) {
    const {
        featuresBenefitsSection: { featuresBenefitsItems, Heading },
    } = content;

    const [activeTab, setActiveTab] = useState(featuresBenefitsItems[0].id);

    return (
        <StyledSection>
            <StyledContainer>
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
                {featuresBenefitsItems.map((feature) => {
                    return (
                        <NewFeature
                            content={feature}
                            key={`${feature.id}`}
                            isOpen={activeTab === feature.id}
                        />
                    );
                })}
            </StyledContainer>
        </StyledSection>
    );
}

NewFeaturesSection.propTypes = {
    content: PropTypes.object.isRequired,
};

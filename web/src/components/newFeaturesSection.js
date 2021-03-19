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
    ${tw`flex gap-10 justify-center mb-4`}
`;

const StyledButton = styled.button`
    ${tw`text-gray-2 text-center font-semibold`}
    color: ${({ isActive }) => (isActive ? '#00A09B' : 'bg-gray-2')}
`;

const StyledHeading = styled.h2`
    ${tw`font-bold leading-tight mb-4 text-4xl text-center`}
`;

const ItemWrapper = styled.div`
    ${tw`grid`}
`;

export default function NewFeaturesSection({ images, content }) {
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
                <ItemWrapper>
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
                </ItemWrapper>
            </StyledContainer>
        </StyledSection>
    );
}

NewFeaturesSection.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    content: PropTypes.object.isRequired,
};

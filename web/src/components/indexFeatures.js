import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import IndexFeature from './indexFeature';

const Section = styled.section`
    ${tw`container my-44`}
`;

const Heading = styled.h2`
    ${tw`font-bold leading-tight mb-24 text-4xl text-center`}
`;

const Grid = styled.div`
    ${tw`grid grid-cols-4 gap-4`}
`;

const GridItem = styled.h3`
    ${tw`cursor-pointer font-bold leading-tight mb-36 text-2xl text-center`}

    color: ${({ isActiveTab }) => (isActiveTab ? 'currentColor' : '#BDBDBD')}
`;

export default function IndexFeatures({ content }) {
    const { features, featuresHeading } = content;

    const [activeTab, setActiveTab] = useState(features[0].id);

    return (
        <Section>
            <Heading>{featuresHeading}</Heading>
            <Grid>
                {features.map((feature) => {
                    return (
                        <GridItem
                            key={feature.id}
                            onClick={() => setActiveTab(feature.id)}
                            isActiveTab={activeTab === feature.id}
                        >
                            {feature.navHeading}
                        </GridItem>
                    );
                })}
            </Grid>
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
        features: PropTypes.array.isRequired,
        featuresHeading: PropTypes.string.isRequired,
    }).isRequired,
};

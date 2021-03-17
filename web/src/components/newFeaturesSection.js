import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';
// import { Link } from 'gatsby';

import NewFeature from './newFeature';

// const content = {
//     // content object that is an array of objects //
//     features: [
//         {
//             feature: [
//                 {
//                     heading: 'Comprehensive Security Monitoring',
//                     body:
//                         'Ensure compliance and security across the entire organization. Infuse technology asset technology into your existing security investments, enabling enhanced situational awareness and super-charging security automation and orchestration.',
//                     id: '01',
//                 },
//                 {
//                     heading: 'Confident Compliance',
//                     body: 'this is the body',
//                     id: '02',
//                 },

//                 {
//                     heading: 'Robust Integrations',
//                     body:
//                         'Releasing trapped value is key to success in a digital world. Our platform is designed to unlock the value of your existing technology data to help power your business through asset intelligence.',
//                     id: '03',
//                 },
//             ],
//             feature: [
//                 {
//                     heading: 'This is another headline',
//                     body:
//                         'Ensure compliance and security across the entire organization. Infuse technology asset technology into your existing security investments, enabling enhanced situational awareness and super-charging security automation and orchestration.',
//                     id: '04',
//                 },
//                 {
//                     heading: 'and another one',
//                     body: 'this is the body',
//                     id: '05',
//                 },

//                 {
//                     heading: 'And another one',
//                     body:
//                         'Releasing trapped value is key to success in a digital world. Our platform is designed to unlock the value of your existing technology data to help power your business through asset intelligence.',
//                     id: '06',
//                 },
//             ],
//             feature: [
//                 {
//                     heading: 'Comprehensive Security Monitoring',
//                     body:
//                         'Ensure compliance and security across the entire organization. Infuse technology asset technology into your existing security investments, enabling enhanced situational awareness and super-charging security automation and orchestration.',
//                     id: '07',
//                 },
//                 {
//                     heading: 'Confident Compliance',
//                     body: 'this is the body',
//                     id: '08',
//                 },

//                 {
//                     heading: 'Robust Integrations',
//                     body:
//                         'Releasing trapped value is key to success in a digital world. Our platform is designed to unlock the value of your existing technology data to help power your business through asset intelligence.',
//                     id: '09',
//                 },
//             ],
//         },
//     ],
// };

const content = {
    features: [
        {
            link: 'Security',
            heading: 'Compliance and Security',
            body:
                'Ensure compliance and security across the entire organization. Infuse technology asset technology into your existing security investments, enabling enhanced situational awareness and super-charging security automation and orchestration.',
            id: '01',
        },
        {
            link: 'Security',
            heading: 'Digital Transformation',
            body:
                'Enable digital transformation with real time asset data that helps you identify opportunities for technology rationalization, innovation and transformation.',
            id: '02',
        },
        {
            link: 'Security',
            heading: 'Untrap Value',
            body:
                'Releasing trapped value is key to success in a digital world. Our platform is designed to unlock the value of your existing technology data to help power your business through asset intelligence.',
            id: '03',
        },
    ],
    id: '0100',
};

// const links = ['Security', 'Intelligence', 'Value'];

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

export default function NewFeaturesSection({ images }) {
    const [activeTab, setActiveTab] = useState(content.features[0].id);
    // const [activeLink, setActiveLink] = useState(0);

    // const handleClick = () => {
    //     const currentLink = activeLink;
    //     const nextLink = currentLink + 1;
    //     setActiveLink(nextLink);
    //     setActiveTab(content.features[nextLink].id);
    // };

    return (
        <StyledSection>
            <StyledHeading>Features/Benefits</StyledHeading>
            <LinkWrapper>
                {content.features.map((feature, i) => {
                    return (
                        <StyledButton
                            onClick={() => setActiveTab(feature.id)}
                            key={feature[i]}
                            isActive={activeTab === feature.id}
                        >
                            {feature.link}
                        </StyledButton>
                    );
                })}
            </LinkWrapper>
            {content.features.map((feature, i) => {
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
};

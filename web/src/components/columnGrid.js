import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

import Figure from './figure';

const Section = styled.section`
    ${tw`container mb-48`};
`;

const Heading = styled.h2`
    ${tw`font-bold pb-32 relative text-5xl text-black text-center`};

    // todo: move color to custom property
    &:after {
        background: #00a09b;
        content: '';
        height: 0.5rem;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(100%);
        width: 3rem;
    }
`;

const Grid = styled.div`
    ${tw`grid grid-cols-1 lg:grid-cols-3 gap-24 lg:px-16`}
`;

const Description = styled.p`
    ${tw`text-xl text-black text-center mb-12`}
`;

export default function ColumnGrid({ content }) {
    const { description, heading, indexIndustries } = content;
    return (
        <Section>
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Grid>
                {indexIndustries.map((item) => {
                    return <Figure content={item} key={item.id} />;
                })}
            </Grid>
        </Section>
    );
}

ColumnGrid.propTypes = {
    content: PropTypes.object.isRequired,
};

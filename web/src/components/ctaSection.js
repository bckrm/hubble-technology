import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import CurveMask from './svgs/curveMask';

const Section = styled.section`
    ${tw`bg-black-1 justify-center py-32 relative text-white`}
`;

const Container = styled.div`
    ${tw`container flex flex-col justify-center items-center`}
`;

const Heading = styled.h2`
    ${tw`font-bold max-w-prose text-4xl text-center leading-snug lg:w-3/4 mx-auto`}
`;

const StyledLink = styled(Link)`
    ${tw`cursor-pointer py-2 px-6 max-w-max mt-16 text-xl tracking-widest`}

    background: #00A09B;
    transition: background 500ms ease-out;

    &:hover {
        background: #027874;
    }
`;

export default function CtaSection({ content }) {
    const {
        ctaHeading: heading,
        link: { text, url },
    } = content;
    return (
        <Section>
            <CurveMask color="var(--darkGray)" isInverted isTop />
            <Container>
                <Heading>{heading}</Heading>
                <StyledLink to={url}>{text}</StyledLink>
            </Container>
        </Section>
    );
}

CtaSection.propTypes = {
    content: PropTypes.object.isRequired,
};

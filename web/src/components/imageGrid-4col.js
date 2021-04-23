import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

// import Img from 'gatsby-image';
import Figure from './figure';

const Section = styled.section`
    ${tw`py-12`};

    background: ${({ bgColor }) => bgColor};
`;

const Container = styled.div`
    ${tw`container`}
`;

const Heading = styled.h2`
    ${tw`font-bold mb-12 relative text-4xl text-black-3`}
    &:after {
        background: var(--green);
        content: '';
        height: 0.25rem;
        left: 0;
        position: absolute;
        top: 100%;
        transform: translateY(1.25rem);
        width: 1.5rem;
    }
`;

const Grid = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20`}
`;

export default function ImageGrid4Col({ bgColor, content }) {
    const {
        dataObj: { heading, items },
    } = content;

    return (
        <Section bgColor={bgColor}>
            <Container>
                <Heading>{heading}</Heading>
                <Grid>
                    {items.map((item) => {
                        const contentObject = {
                            description: item.position,
                            heading: item.name,
                            image: item.image,
                        };
                        return <Figure key={item.id} content={contentObject} />;
                    })}
                </Grid>
            </Container>
        </Section>
    );
}

ImageGrid4Col.defaultProps = {
    bgColor: 'var(--white)',
};

ImageGrid4Col.propTypes = {
    bgColor: PropTypes.string,
    content: PropTypes.shape({
        dataObj: PropTypes.shape({
            heading: PropTypes.string.isRequired,
            items: PropTypes.array.isRequired,
        }),
    }).isRequired,
};

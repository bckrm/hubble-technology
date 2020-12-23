import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import TextLogoWhite from './logos/textLogoWhite';

const content = {
    footerLinks: [
        {
            name: 'page link',
            link: '#',
        },
        {
            name: 'page link',
            link: '#',
        },
        {
            name: 'page link',
            link: '#',
        },
        {
            name: 'page link',
            link: '#',
        },
        {
            name: 'page link',
            link: '#',
        },
        {
            name: 'page link',
            link: '#',
        },
    ],
};

const StyledFooter = styled.footer`
    ${tw`container flex flex-col md:flex-row justify-between mx-auto px-4 lg:px-2 2xl:px-0`}
`;

const LogoWrapper = styled.div`
    ${tw`mb-12 md:mb-0 self-center md:self-start`}
`;

const StyledUL = styled.ul`
    ${tw`flex flex-wrap justify-center md:justify-start mx-auto md:mx-0 w-1/2`}

    @media screen and (min-width: 768px) {
        max-width: 16rem;
    }
`;

const StyledLink = styled.a`
    ${tw`mx-4 md:mx-0 md:mr-12`}
`;

export default function Footer() {
    return (
        <StyledFooter>
            <LogoWrapper>
                <TextLogoWhite />
            </LogoWrapper>
            <StyledUL>
                {content.footerLinks.map((item) => {
                    return (
                        <li key={item.name}>
                            <StyledLink href={item.link}>
                                {item.name}
                            </StyledLink>
                        </li>
                    );
                })}
            </StyledUL>
        </StyledFooter>
    );
}

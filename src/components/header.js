import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

import FullLogo from './logos/fullLogo';

const content = {
    nav: [
        {
            name: 'why hubble',
            link: '#why-hubble',
        },
        {
            name: 'contact',
            link: '#contact',
        },
    ],
};

const StyledNav = styled.nav`
    ${tw`fixed py-8 w-full z-10`}

    background-color: ${(props) =>
        props.isScrolled ? `#04080D` : `#04080D00`};
    transition: background-color 500ms ease-out;
`;

const NavInner = styled.div`
    ${tw`container flex justify-between mx-auto px-4 lg:px-2 2xl:px-0`}
`;

const StyledUL = styled.ul`
    ${tw`flex flex-col md:flex-row self-center`}
`;

const StyledLink = styled.a`
    ${tw`block font-bold ml-5 md:ml-10 my-4 md:my-0 text-lg text-right uppercase leading-5`}
`;

const LogoLink = styled(StyledLink)`
    ${tw`ml-0`}
`;

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <StyledNav isScrolled={isScrolled}>
            <NavInner>
                <LogoLink href="#hero">
                    <FullLogo />
                </LogoLink>
                <StyledUL>
                    {content.nav.map((item) => (
                        <li key={item.link}>
                            <StyledLink href={item.link}>
                                {item.name}
                            </StyledLink>
                        </li>
                    ))}
                </StyledUL>
            </NavInner>
        </StyledNav>
    );
}

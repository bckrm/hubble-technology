import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';
import { Link } from 'gatsby';

import FullLogo from './logos/fullLogo';
import MainNav from './nav/mainNav';
import MobilNav from './nav/mobileNav';

const nav = [
    {
        name: 'about',
        link: '/about',
    },
    {
        name: 'features',
        link: '/features',
    },
    {
        name: 'contact',
        link: '/contact',
    },
    {
        name: 'demo',
        link: '/contact#demo',
    },
];

const Nav = styled.nav`
    ${tw`fixed py-8 w-full z-10`}

    background-color: ${(props) =>
        props.isScrolled ? `#04080D` : `#04080D00`};
    transition: background-color 500ms ease-out;
`;

const NavInner = styled.div`
    ${tw`container flex justify-between mx-auto`}
`;

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleNavToggle = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <Nav isScrolled={isScrolled}>
            <NavInner>
                <Link href="/">
                    <FullLogo />
                </Link>
                <MobilNav
                    handleNavToggle={handleNavToggle}
                    isMobileNavOpen={isMobileNavOpen}
                    isScrolled={isScrolled}
                    navItems={nav}
                />
                <MainNav navItems={nav} />
            </NavInner>
        </Nav>
    );
}

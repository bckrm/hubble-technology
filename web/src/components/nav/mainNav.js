import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

const UL = styled.ul`
    ${tw`hidden md:flex flex-row items-center font-bold leading-5 justify-between self-center text-white uppercase`}
`;

const LI = styled.li`
    ${tw`ml-8 text-lg`}
`;
const PageLink = styled.a`
    ${tw`block bg-green py-2 px-7`}
`;

export default function MainNav({ navItems }) {
    return (
        <UL>
            {navItems.map((item) => {
                if (item.name === 'demo') {
                    return (
                        <LI key={item.link}>
                            {/* <AnchorLink to="/contact#demo" title={item.name} /> */}
                            {/* <PageLink href={item.link}>{item.name}</PageLink> */}
                            <PageLink>
                                <Link to="/contact#demo">{item.name}</Link>
                            </PageLink>
                        </LI>
                    );
                }
                return (
                    <LI key={item.link}>
                        <Link href={item.link}>{item.name}</Link>
                    </LI>
                );
            })}
        </UL>
    );
}

MainNav.propTypes = {
    navItems: PropTypes.array.isRequired,
};

import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

import TextLogoWhite from './logos/textLogoWhite';

const StyledFooter = styled.footer`
    ${tw`bg-black-1 py-14 text-white`}
`;

const FooterInner = styled.div`
    ${tw`container flex justify-between flex-col md:flex-row`}
`;

const FooterNav = styled.div`
    ${tw`flex flex-col md:flex-row items-center md:items-start`}
`;

const ContactDiv = styled.div`
    ${tw`flex flex-col mb-10 md:mr-20`}
`;

const LogoLink = styled(Link)`
    ${tw`mb-3`}
`;

const UL = styled.ul`
    ${tw`grid grid-cols-2 gap-x-10 mb-10 md:mb-0`}
`;

// link hover styles added as className, need to revisit
// link hover state utility classes applied using className in jsx

const Form = styled.form`
    ${tw`flex flex-col items-center md:items-end`}
`;

const FormHeading = styled.p`
    ${tw`capitalize font-bold mb-3.5 text-xl text-right`}
`;

const Label = styled.label`
    ${tw`sr-only`}
`;

const Input = styled.input`
    ${tw`bg-white border border-white mb-5 p-1 text-lg text-right`}
`;

const Button = styled.button`
    ${tw`bg-green self-center md:self-end capitalize py-2 px-6 max-w-max text-xl tracking-widest`}
`;

// todo: confirm hover states for internal links
// todo: wire up form submission

const content = {
    externalLinks: [
        {
            link: 'https://www.linkedin.com/company/hubble-technology/',
            text: 'LinkedIn',
        },
        {
            link: 'https://twitter.com/gethubble',
            text: 'Twitter',
        },
    ],
    form: {
        heading: 'newsletter',
        buttonText: 'submit',
    },
};

export default function Footer() {
    const [email, setEmail] = useState('');
    const handleChange = ({ target }) => {
        const { value } = target;
        setEmail(value);
    };
    const links = content.externalLinks.map((item) => {
        return (
            <li key={item.text}>
                <a href={item.link} target="_blank" rel="noreferrer">
                    {item.text}
                </a>
            </li>
        );
    });

    return (
        <StyledFooter>
            <FooterInner>
                <FooterNav>
                    <ContactDiv>
                        <LogoLink to="/">
                            <TextLogoWhite />
                        </LogoLink>
                    </ContactDiv>
                    <UL>{links}</UL>
                </FooterNav>
                <Form>
                    <FormHeading>{content.form.heading}</FormHeading>
                    <Label htmlFor="email sr-only">Email</Label>
                    <Input
                        name="email"
                        placeholder="email"
                        type="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <Button type="submit">{content.form.buttonText}</Button>
                </Form>
            </FooterInner>
        </StyledFooter>
    );
}

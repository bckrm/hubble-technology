import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ContactWrapper = styled.div`
    ${tw`text-center`}
`;

const FormStyling = styled.form`
    ${tw`flex flex-wrap`}
`;

const StyledHeading = styled.h1`
    ${tw`font-bold mb-8 relative text-4xl text-black-3 leading-tight`}
`;

const ButtonStyling = styled.button`
    ${tw`cursor-pointer py-2 px-6 max-w-max mt-16 text-xl tracking-widest`}

    background: #00A09B;
    transition: background 500ms ease-out;

    &:hover {
        background: #027874;
    }
`;

export default function ContactForm() {
    return (
        <ContactWrapper>
            <StyledHeading>Request a Demo</StyledHeading>
            <FormStyling method="post" action="#">
                <input type="text" name="firstname" id="firstname" />
                <input type="text" name="lastname" id="lastname" />
                <input type="email" name="email" id="email" />
                <input type="text" name="title" id="title" />
                <ButtonStyling>Let&apos;s Do It</ButtonStyling>
            </FormStyling>
        </ContactWrapper>
    );
}

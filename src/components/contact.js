import React, { useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from 'twin.macro';

const content = {
    heading: 'Ready to get started?',
    buttonText: 'submit',
};

const StyledSection = styled.section`
    ${tw`container mx-auto mb-16 px-4 lg:px-2 2xl:px-0`}
`;

const StyledHeading = styled.h2`
    ${tw`font-bold mb-8 text-4xl text-center`}

    line-height: 3.25rem;
`;

const StyledForm = styled.form`
    ${tw`flex flex-col items-center`}
`;

const InputWrapper = styled.div`
    ${tw`flex flex-col md:flex-row md:justify-around md:mx-auto w-1/2`}
`;

const StyledLabel = styled.label`
    ${tw`flex flex-col text-sm`}
`;

const StyledInput = styled.input`
    ${tw`mt-2 py-1 px-2 text-black`}
`;

const StyledButton = styled.button`
    ${tw`py-2 px-6 max-w-max mt-8 text-white tracking-widest uppercase`}

    background: #00A09B;
    transition: background 500ms ease-out;

    &:hover {
        background: #027874;
    }
`;

export default function Contact() {
    const [input, setInput] = useState({});

    const handleInputChange = (e) =>
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value,
        });

    return (
        <StyledSection id="contact">
            <StyledHeading>{content.heading}</StyledHeading>
            <StyledForm>
                <InputWrapper>
                    <StyledLabel>
                        Name
                        <StyledInput
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                        />
                    </StyledLabel>
                    <StyledLabel>
                        Email
                        <StyledInput
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                        />
                    </StyledLabel>
                </InputWrapper>
                <StyledButton type="submit">{content.buttonText}</StyledButton>
            </StyledForm>
        </StyledSection>
    );
}

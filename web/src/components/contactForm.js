import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const ContactWrapper = styled.div`
    ${tw`text-center`}
`;

const StyledForm = styled.form`
    ${tw`flex flex-col items-center`}
`;

const StyledHeading = styled.h1`
    ${tw`font-bold mb-8 relative text-4xl text-black-3 leading-tight`}
`;
const InputWrapper = styled.div`
    ${tw`flex gap-1`}
`;

const StyledButton = styled.button`
    ${tw`cursor-pointer bg-green py-2 px-6 text-white max-w-max mt-16 text-xl tracking-widest`}

    transition: background 500ms ease-out;

    // &:hover {
    //     background: #027874;
    // }
`;

const StyledInput = styled.input`
    ${tw`border-2`}
`;

const StyledLabel = styled.label`
    ${tw`flex flex-col mb-4 mx-4 text-sm`}
`;

export default function ContactForm() {
    const [formData, setFormData] = useState(null);
    const [submitForm, setSubmitForm] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(
                        data[key],
                    )}`,
            )
            .join('&');
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...formData,
            }),
        })
            .then(() => setSubmitForm(true))
            .catch((error) => error);
    };

    return (
        <ContactWrapper>
            <StyledHeading>Request a Demo</StyledHeading>
            {submitForm ? (
                <StyledHeading>Thank you!</StyledHeading>
            ) : (
                <StyledForm
                    method="post"
                    onSubmit={handleSubmit}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <InputWrapper>
                        <div>
                            <StyledLabel htmlFor="firstName">
                                First Name:
                                <StyledInput
                                    type="text"
                                    name="name"
                                    id="firstname"
                                    onChange={handleChange}
                                    required
                                />
                            </StyledLabel>

                            <StyledLabel htmlFor="lastName">
                                Last Name:
                                <StyledInput
                                    type="text"
                                    name="name"
                                    id="lastname"
                                    onChange={handleChange}
                                />
                            </StyledLabel>
                        </div>
                        <div>
                            <StyledLabel htmlFor="email">
                                Email:
                                <StyledInput
                                    type="email"
                                    name="email"
                                    id="email"
                                    onChange={handleChange}
                                    required
                                />
                            </StyledLabel>

                            <StyledLabel htmlFor="title">
                                Title:
                                <StyledInput
                                    type="text"
                                    name="title"
                                    id="title"
                                    onChange={handleChange}
                                />
                            </StyledLabel>
                        </div>
                    </InputWrapper>
                    <StyledButton type="submit">Let&apos;s Do It</StyledButton>
                </StyledForm>
            )}
        </ContactWrapper>
    );
}

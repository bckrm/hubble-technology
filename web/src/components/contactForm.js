import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { navigate } from 'gatsby';

const ContactWrapper = styled.div`
    ${tw`text-center`}
`;

const FormStyling = styled.form`
    ${tw`flex flex-col justify-center items-center`}
`;

const StyledHeading = styled.h1`
    ${tw`font-bold mb-8 relative text-4xl text-black-3 leading-tight`}
`;
const InputWrapper = styled.div`
    ${tw`flex gap-1 w-1/3 flex-wrap`}
`;

const ButtonStyling = styled.button`
    ${tw`cursor-pointer py-2 px-6 max-w-max mt-16 text-xl tracking-widest`}

    background: #00A09B;
    transition: background 500ms ease-out;

    &:hover {
        background: #027874;
    }
`;

const InputStyle = styled.input`
    ${tw`border-2`}
`;

export default function ContactForm() {
    const [formData, setFormData] = useState(null);

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
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => error);
    };

    return (
        <ContactWrapper>
            <StyledHeading>Request a Demo</StyledHeading>
            <FormStyling
                method="post"
                action="thanks"
                onSubmit={handleSubmit}
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <InputWrapper>
                    <label htmlFor="firstName">
                        First Name:
                        <InputStyle
                            type="text"
                            name="name"
                            id="firstname"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="lastName">
                        Last Name:
                        <InputStyle
                            type="text"
                            name="name"
                            id="lastname"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="email">
                        Email:
                        <InputStyle
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="title">
                        Title:
                        <InputStyle
                            type="text"
                            name="title"
                            id="title"
                            onChange={handleChange}
                        />
                    </label>
                </InputWrapper>
                <ButtonStyling type="submit">Let&apos;s Do It</ButtonStyling>
            </FormStyling>
        </ContactWrapper>
    );
}

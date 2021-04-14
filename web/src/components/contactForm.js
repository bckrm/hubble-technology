import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro';

const ContactWrapper = styled.section`
    ${tw`text-center`}
`;

const StyledForm = styled.form`
    ${tw`flex flex-col items-center`}
`;

const StyledHeading = styled.h1`
    ${tw`font-bold my-8 relative text-4xl text-black-3 leading-tight`}
`;
const InputWrapper = styled.div`
    ${tw`flex flex-col lg:grid lg:grid-cols-2 gap-1`}
`;

const StyledButton = styled.button`
    ${tw`cursor-pointer transition duration-500 ease-out bg-green py-2 px-6 text-white max-w-max mt-16 text-xl tracking-widest hover:bg-hoverGreen`}
`;

const StyledInput = styled.input`
    ${tw`border-2 h-10 mt-2 py-1 px-2 text-lg text-black`}
`;

const StyledLabel = styled.label`
    ${tw`flex flex-col mb-4 mx-4 text-sm text-left`}
`;

const StyledHoneyPot = styled.p`
    ${tw`hidden`}
`;

export default function ContactForm({ content }) {
    const { formHeading } = content;
    const [formData, setFormData] = useState(null);
    const [isSubmitFormSuccessful, setIsSubmitFormSuccessful] = useState(false);

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
            .then(() => setIsSubmitFormSuccessful(true))
            .catch((error) => error);
    };

    return (
        <ContactWrapper id="demo">
            <StyledHeading>{formHeading}</StyledHeading>
            {isSubmitFormSuccessful ? (
                <StyledHeading>Thank you!</StyledHeading>
            ) : (
                <StyledForm
                    method="post"
                    onSubmit={handleSubmit}
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    name="contact-form"
                >
                    <StyledHoneyPot>
                        <label>
                            <input name="bot-field" />
                        </label>
                    </StyledHoneyPot>
                    <InputWrapper>
                        <StyledLabel htmlFor="firstname">
                            First Name
                            <StyledInput
                                type="text"
                                name="firstname"
                                id="firstname"
                                onChange={handleChange}
                                required
                            />
                        </StyledLabel>
                        <StyledLabel htmlFor="lastname">
                            Last Name
                            <StyledInput
                                type="text"
                                name="lastname"
                                id="lastname"
                                onChange={handleChange}
                            />
                        </StyledLabel>
                        <StyledLabel htmlFor="title">
                            Title
                            <StyledInput
                                type="text"
                                name="title"
                                id="title"
                                onChange={handleChange}
                            />
                        </StyledLabel>
                        <StyledLabel htmlFor="company">
                            Company
                            <StyledInput
                                type="text"
                                name="company"
                                id="company"
                                onChange={handleChange}
                            />
                        </StyledLabel>
                        <StyledLabel htmlFor="email">
                            Email
                            <StyledInput
                                type="email"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                required
                            />
                        </StyledLabel>
                    </InputWrapper>
                    <StyledButton type="submit">Let&apos;s Do It</StyledButton>
                </StyledForm>
            )}
        </ContactWrapper>
    );
}

ContactForm.propTypes = {
    content: PropTypes.object.isRequired,
};

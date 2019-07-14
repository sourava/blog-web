import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components/html';

import {
    PageContainer,
    AuthContainer,
    AuthHeadingContainer,
    AuthHeading,
    AuthSubHeading,
    HorizontalRowContainer,
    HorizontalRow,
    Form,
    Input
} from './authStyledComponents';

const propTypes = {
    socialToken: PropTypes.string,
    facebookSignUp: PropTypes.func.isRequired,
    googleSignUp: PropTypes.func.isRequired,
};

const SetPassword = ({ socialToken, facebookSignUp, googleSignUp }) => {
    const [passwordField1, setPasswordField1] = useState("");
    const [passwordField2, setPasswordField2] = useState("");
    const [error, setError] = useState("");

    const onSubmit = () => {
        if (passwordField1 == passwordField2) {
            if (socialToken != null) {
                const data = {
                    "token": socialToken["token"],
                    "password": passwordField1
                };
                if (socialToken["provider"] === "FACEBOOK") {
                    facebookSignUp(data);
                } else if (socialToken["provider"] === "GOOGLE") {
                    googleSignUp(data);
                }
            } else {
                setError("Unexpected Error");
            }
        } else {
            setError("Password mismatch");
        }
    };

    return (
        <PageContainer>
            <AuthContainer>
                <AuthHeadingContainer>
                    <AuthHeading>Please set password for your account!</AuthHeading>
                </AuthHeadingContainer>
                <HorizontalRowContainer>
                    <HorizontalRow />
                </HorizontalRowContainer>
                <Form>
                    <Input type="password" placeholder="Password" onChange={(e) => setPasswordField1(e.target.value)} />
                    <Input type="password" placeholder="Confirm Password" onChange={(e) => setPasswordField2(e.target.value)} />
                    <Button block background="rgb(79, 119, 255)" color="#FFFFFF" margin="10px 0" onClick={onSubmit}>Submit</Button>
                </Form>
                <AuthSubHeading>{error}</AuthSubHeading>
            </AuthContainer>
        </PageContainer>
    );
};

SetPassword.propTypes = propTypes;

export default SetPassword;

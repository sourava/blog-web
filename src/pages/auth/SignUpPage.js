import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';

import {
    PageContainer,
    AuthContainer,
    AuthHeadingContainer,
    AuthHeading,
    AuthSubHeading,
    SocialLoginContainer,
    HorizontalRowContainer,
    HorizontalRow,
    HorizontalRowText,
    Form,
    FormInput,
    FormButton,
    FacebookButton,
    GoogleButton,
    Error,
} from './authStyledComponents';

const propTypes = {
    facebookSignUp: PropTypes.func.isRequired,
    googleSignUp: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const SignUpPage = ({ facebookSignUp, googleSignUp, history }) => {
    const [token, setToken] = useState("");
    const [provider, setProvider] = useState("");
    const [error, setError] = useState("");
    const [passwordField1, setPasswordField1] = useState("");
    const [passwordField2, setPasswordField2] = useState("");

    const successHandler = () => {
        history.push("home");
    };

    const errorHandler = (response) => {
        setToken("");
        setError(response.data.message);
    };

    const responseFacebook = (response) => {
        if (response.status === "unknown") {
            setError("Error During Signup");
        } else {
            setToken(response["accessToken"]);
            setProvider("FACEBOOK");
        }
    };

    const responseGoogle = (response) => {
        if (response.error) {
            setError("Error During Signup");
        } else {
            setToken(response["accessToken"]);
            setProvider("GOOGLE");
        }
    };

    const socialSignup = () => {
        if (passwordField1 === passwordField2) {
            if (token !== "") {
                const data = {
                    "token": token,
                    "password": passwordField1
                };
                if (provider === "FACEBOOK") {
                    facebookSignUp(data, successHandler, errorHandler);
                } else if (provider === "GOOGLE") {
                    googleSignUp(data, successHandler, errorHandler);
                }
            } else {
                setError("Unexpected Error");
            }
        } else {
            setError("Password mismatch");
        }
    };

    const renderSignUp = () => {
        return (
            <AuthContainer>
                <AuthHeadingContainer>
                    <AuthHeading>Sign up for free!</AuthHeading>
                </AuthHeadingContainer>
                <SocialLoginContainer>
                    <FacebookLogin
                        appId="2264107667176678"
                        callback={responseFacebook}
                        disableMobileRedirect={true}
                        render={
                            renderProps => <FacebookButton text="Facebook Signup" onClick={renderProps.onClick} />
                        }
                    />
                    <GoogleLogin
                        clientId="1009406741570-ueinnk3jgko4tuq3bv5oohna447dp8ra.apps.googleusercontent.com"
                        render={
                            renderProps => <GoogleButton text="Google Signup" onClick={renderProps.onClick} />
                        }
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </SocialLoginContainer>
                <HorizontalRowContainer>
                    <HorizontalRow />
                    <HorizontalRowText>OR</HorizontalRowText>
                </HorizontalRowContainer>
                <Form>
                    <FormInput type="text" placeholder="Full Name" />
                    <FormInput type="text" placeholder="Email address" />
                    <FormInput type="password" placeholder="Password" />
                    <FormInput type="password" placeholder="Confirm Password" />
                    <FormButton>Sign Up</FormButton>
                    <AuthSubHeading><Link to="login">Already have an account?</Link></AuthSubHeading>
                    <Error>{error}</Error>
                </Form>
            </AuthContainer>
        );
    };

    const renderSetPassword = () => {
        return (
            <AuthContainer>
                <AuthHeadingContainer>
                    <AuthHeading>Please set password for your account!</AuthHeading>
                </AuthHeadingContainer>
                <HorizontalRowContainer>
                    <HorizontalRow />
                </HorizontalRowContainer>
                <Form>
                    <FormInput type="password" placeholder="Password" onChange={(e) => setPasswordField1(e.target.value)} />
                    <FormInput type="password" placeholder="Confirm Password" onChange={(e) => setPasswordField2(e.target.value)} />
                    <FormButton onClick={socialSignup}>Submit</FormButton>
                </Form>
                <Error>{error}</Error>
            </AuthContainer>
        );
    };

    return (
        <PageContainer>
            {token === "" ? renderSignUp() : renderSetPassword()}
        </PageContainer>
    );
};

SignUpPage.propTypes = propTypes;

export default SignUpPage;
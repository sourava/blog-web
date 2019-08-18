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
    facebookLogin: PropTypes.func.isRequired,
    googleLogin: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const LoginPage = ({ facebookLogin, googleLogin, history }) => {
    const [error, setError] = useState("");

    const successHandler = () => {
        history.push("home");
    };

    const errorHandler = (response) => {
        setError(response.data.message);
    };

    const responseFacebook = (response) => {
        facebookLogin({
            "token": response["accessToken"]
        }, successHandler, errorHandler);
    };

    const responseGoogle = (response) => {
        googleLogin({
            "token": response["accessToken"]
        }, successHandler, errorHandler);
    };

    return (
        <PageContainer>
            <AuthContainer>
                <AuthHeadingContainer>
                    <AuthHeading>Login to your account</AuthHeading>
                    <AuthSubHeading>Don&apos;t have an account? <Link to="signup">Sign Up Free!</Link></AuthSubHeading>
                </AuthHeadingContainer>
                <SocialLoginContainer>
                    <FacebookLogin
                        appId="2264107667176678"
                        callback={responseFacebook}
                        disableMobileRedirect={true}
                        render={
                            renderProps => <FacebookButton text="Facebook Login" onClick={renderProps.onClick} />
                        }
                    />
                    <GoogleLogin
                        clientId="1009406741570-ueinnk3jgko4tuq3bv5oohna447dp8ra.apps.googleusercontent.com"
                        render={
                            renderProps => <GoogleButton text="Google Login" onClick={renderProps.onClick} />
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
                    <FormInput type="text" placeholder="Email address" />
                    <FormInput type="password" placeholder="Password" />
                    <FormButton>Login</FormButton>
                </Form>
                <Error>{error}</Error>
            </AuthContainer>
        </PageContainer>
    );
};

LoginPage.propTypes = propTypes;

export default LoginPage;
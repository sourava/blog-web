import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';

import routePaths from 'shared/routePaths';
import { Spinner } from 'shared/components/html';

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
    customLogin: PropTypes.func.isRequired,
    facebookLogin: PropTypes.func.isRequired,
    googleLogin: PropTypes.func.isRequired,
    loginData: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

const LoginPage = ({ customLogin, facebookLogin, googleLogin, loginData, history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const successHandler = () => {
        history.push("home");
    };

    const errorHandler = (response) => {
        setError(response.data.message);
    };
    
    const onClickCustomLogin = () => {
        customLogin({
            email,
            password
        }, successHandler, errorHandler);
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

    if (loginData.isPending) {
        return <Spinner />;
    } else {
        return (
            <PageContainer>
                <AuthContainer>
                    <AuthHeadingContainer>
                        <AuthHeading>Login to your account</AuthHeading>
                        <AuthSubHeading>Don&apos;t have an account? <Link to={routePaths.SIGNUP}>Sign Up Free!</Link></AuthSubHeading>
                    </AuthHeadingContainer>
                    <SocialLoginContainer>
                        <FacebookLogin
                            appId="356500761925864"
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
                        <FormInput type="text" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                        <FormInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <FormButton onClick={onClickCustomLogin}>Login</FormButton>
                    </Form>
                    <Error>{error}</Error>
                </AuthContainer>
            </PageContainer>
        );
    }
};

LoginPage.propTypes = propTypes;

export default LoginPage;
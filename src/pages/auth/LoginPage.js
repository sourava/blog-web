import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';

import { Button, ImageButton } from 'shared/components/html';
import facebookIcon from 'shared/assets/icons/facebook.png';
import googleIcon from 'shared/assets/icons/google.png';

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
    Input
} from './authStyledComponents';

const propTypes = {
    facebookLogin: PropTypes.func.isRequired,
    googleLogin: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const LoginPage = ({ facebookLogin, googleLogin, history }) => {
    const successHandler = () => {
        history.push("home");
    };

    const errorHandler = () => { };

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
                    <AuthSubHeading>Don’t have an account? <Link to="signup">Sign Up Free!</Link></AuthSubHeading>
                </AuthHeadingContainer>
                <SocialLoginContainer>
                    <FacebookLogin
                        appId="2264107667176678"
                        callback={responseFacebook}
                        render={
                            renderProps => <ImageButton imageProps={{ src: facebookIcon, round: false, height: "30px", width: "auto" }} text="Facebook Login" onClick={renderProps.onClick} />
                        }
                    />
                    <GoogleLogin
                        clientId="1009406741570-ueinnk3jgko4tuq3bv5oohna447dp8ra.apps.googleusercontent.com"
                        render={
                            renderProps => <ImageButton imageProps={{ src: googleIcon, round: false, height: "30px", width: "auto" }} text="Google Login" onClick={renderProps.onClick} />
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
                    <Input type="text" placeholder="Email address" />
                    <Input type="password" placeholder="Password" />
                    <Button type="primary" block margin="10px 0 0" size="large">Login</Button>
                </Form>
            </AuthContainer>
        </PageContainer>
    );
};

LoginPage.propTypes = propTypes;

export default LoginPage;
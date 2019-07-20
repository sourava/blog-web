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
    setTokenAction: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

const SignUpPage = ({ setTokenAction, history }) => {
    const responseFacebook = (response) => {
        setTokenAction({
            "token": response["accessToken"],
            "provider": "FACEBOOK"
        });
        history.push("setpassword");
    };

    const responseGoogle = (response) => {
        setTokenAction({
            "token": response["accessToken"],
            "provider": "GOOGLE"
        });
        history.push("setpassword");
    };

    return (
        <PageContainer>
            <AuthContainer>
                <AuthHeadingContainer>
                    <AuthHeading>Sign up for free!</AuthHeading>
                </AuthHeadingContainer>
                <SocialLoginContainer>
                    <FacebookLogin
                        appId="2264107667176678"
                        callback={responseFacebook}
                        render={
                            renderProps => <ImageButton imageProps={{ src: facebookIcon, round: false, height: "30px", width: "auto" }} text="Facebook Signup" onClick={renderProps.onClick} />
                        }
                    />
                    <GoogleLogin
                        clientId="1009406741570-ueinnk3jgko4tuq3bv5oohna447dp8ra.apps.googleusercontent.com"
                        render={
                            renderProps => <ImageButton imageProps={{ src: googleIcon, round: false, height: "30px", width: "auto" }} text="Google Signup" onClick={renderProps.onClick} />
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
                    <Input type="text" placeholder="Full Name" />
                    <Input type="text" placeholder="Email address" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />
                    <Button type="primary" block size="large" margin="10px 0">Sign Up</Button>
                    <AuthSubHeading><Link to="login">Already have an account?</Link></AuthSubHeading>
                </Form>
            </AuthContainer>
        </PageContainer>
    );
};

SignUpPage.propTypes = propTypes;

export default SignUpPage;
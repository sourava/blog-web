import styled from 'styled-components';
import { Input, Button, ImageButton } from 'shared/components/html';
import facebookIcon from 'shared/assets/icons/facebook.png';
import googleIcon from 'shared/assets/icons/google.png';

const PageContainer = styled.div`
    display: flex;
    background: rgb(240, 242, 245);
    width: 100%;
    height: 865px;
`;

const AuthContainer = styled.div`
    background: #FFFFFF;
    width: 500px;
    margin: auto;
    box-shadow: 0 3px 5px rgba(0,0,0,.05);
    padding: 40px;
`;

const AuthHeadingContainer = styled.div`
    margin-bottom: 30px;
`;

const AuthHeading = styled.h3`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
`;
const AuthSubHeading = styled.h4`
    font-size: 16px;
    font-weight: 400;
    color: rgb(68, 82, 95);
    text-align: center;
    margin-top: 10px;
`;

const Error = styled(AuthSubHeading)`
    color: red;
`;

const SocialLoginContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 575px) {
        flex-direction: column;
    }
`;

const HorizontalRowContainer = styled.div`
    display: block;
    position: relative;
`;
const HorizontalRow = styled.hr`
    margin: 40px 0;
`;
const HorizontalRowText = styled.span`
    background: #FFFFFF;
    display: block;
    padding: 0 20px;
    position: absolute;
    font-size: 14px;
    top: -13px;
    left: 185px;

    @media (max-width: 575px) {
        left: 135px;
    }
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
`;

const FormInput = styled(Input).attrs({
    margin: "0 0 10px"
})``;

const FormButton = styled(Button).attrs({
    type: "primary",
    block: true,
    size: "large"
})``;

const FacebookButton = styled(ImageButton).attrs({
    imageProps: { 
        src: facebookIcon, 
        round: false, 
        height: "30px", 
        width: "auto"
    }
})``;

const GoogleButton = styled(ImageButton).attrs({
    imageProps: { 
        src: googleIcon, 
        round: false, 
        height: "30px", 
        width: "auto"
    }
})`
    @media (max-width: 575px) {
        margin-top: 20px;
    }
`;

export {
    PageContainer,
    AuthContainer,
    AuthHeadingContainer,
    AuthHeading,
    AuthSubHeading,
    Error,
    SocialLoginContainer,
    HorizontalRowContainer,
    HorizontalRow,
    HorizontalRowText,
    Form,
    FormInput,
    FormButton,
    FacebookButton,
    GoogleButton,
};
import styled from 'styled-components';

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
    margin-bottom: 10px;
`;

const SocialLoginContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HorizontalRowContainer = styled.div`
    display: block;
    position: relative;
`;
const HorizontalRow = styled.hr``;
const HorizontalRowText = styled.span`
    background: #FFFFFF;
    display: block;
    padding: 0 20px;
    position: absolute;
    font-size: 14px;
    top: -8px;
    left: 185px;
`;

const Form = styled.div``;
const Input = styled.input`
    outline: none;
    padding: 20px;
    margin-top: 10px;
`;

export {
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
    Input,
};
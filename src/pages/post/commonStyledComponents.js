import styled from 'styled-components';
import { FlexContainer, Input, ImageButton, Button, Icon } from 'shared/components/html';
import uploadIcon from 'shared/assets/icons/upload.png';

const PageContainer = styled.div`
    width: 1140px;
    margin: auto;
    padding: 0 15px;

    @media (max-width: 1140px) {
        width: 100%;
        padding: 0 40px;
    }

    @media (max-width: 991px) {
        padding: 0 15px;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SelectContainer = styled(FlexContainer).attrs({
    flexDirection: "column",
    margin: "0 0 20px"
})``;

const FormInput = styled(Input).attrs({
    margin: "0 0 20px"
})``;

const ThumbnailContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    width: 100px;
    border: 1px solid gray;
    margin-bottom: 20px;
`;

const Thumbnail = styled(Icon).attrs({
    height: "100px",
    width: "100px"   
})``;

const ThumbnailButton = styled(ImageButton).attrs({
    imageProps: { 
        src: uploadIcon, 
        round: false, 
        height: "15px", 
        width: "auto"
    },
    size: "large",
    text: "Add a thumbnail"
})``;

const FormButton = styled(Button).attrs({
    type: "primary",
    margin: "20px 0 0",
    size: "large",
})``;

export {
    PageContainer,
    FormContainer,
    SelectContainer,
    FormInput,
    ThumbnailContainer,
    Thumbnail,
    ThumbnailButton,
    FormButton
};

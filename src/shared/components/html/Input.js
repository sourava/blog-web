import styled from 'styled-components';

const getBorder = (borderType) => {
    if (borderType == "bottom") {
        return {
            "borderTop": "none",
            "borderLeft": "none",
            "borderRight": "none",
            "borderBottom": ""
        };
    } else {
        return {
            "borderTop": "",
            "borderLeft": "",
            "borderRight": "",
            "borderBottom": ""
        };
    }
};

const Input = styled.input`
    outline: none;
    font-size: ${props => props.fontSize || ""};
    height: ${props => props.height || ""};
    padding: 0;
    border-top: ${props => getBorder(props.borderType)["borderTop"]};
    border-left: ${props => getBorder(props.borderType)["borderLeft"]};
    border-right: ${props => getBorder(props.borderType)["borderRight"]};
    border-bottom: ${props => getBorder(props.borderType)["borderBottom"]};

    &:hover {
        outline: none;
    }

    &:focus {
        border-top: ${props => getBorder(props.borderType)["borderTop"]};
        border-left: ${props => getBorder(props.borderType)["borderLeft"]};
        border-right: ${props => getBorder(props.borderType)["borderRight"]};
        border-bottom: ${props => getBorder(props.borderType)["borderBottom"]};
    }
`;

export default Input;

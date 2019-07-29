import styled from 'styled-components';

const getBorder = (borderType) => {
    if (borderType == "bottom") {
        return {
            "borderTop": "none",
            "borderLeft": "none",
            "borderRight": "none",
            "borderBottom": ""
        };
    } else if (borderType == "none") {
        return {
            "borderTop": "none",
            "borderLeft": "none",
            "borderRight": "none",
            "borderBottom": "none"
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

const TextArea = styled.textarea`
    outline: none;
    font-size: ${props => props.fontSize || ""};
    height: ${props => props.height || ""};
    margin: ${props => props.margin || ""};
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

export default TextArea;

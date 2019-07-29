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
            "borderTop": "1px solid #d9d9d9;",
            "borderLeft": "1px solid #d9d9d9;",
            "borderRight": "1px solid #d9d9d9;",
            "borderBottom": "1px solid #d9d9d9;",
            "hoverBorderTop": "1px solid rgb(68, 170, 254);",
            "hoverBorderLeft": "1px solid rgb(68, 170, 254);",
            "hoverBorderRight": "1px solid rgb(68, 170, 254);",
            "hoverBorderBottom": "1px solid rgb(68, 170, 254);"
        };
    }
};

const Input = styled.input`
    outline: none;
    font-size: ${props => props.fontSize || "16px"};
    height: ${props => props.height || "40px"};
    width: ${props => props.width || "100%"};
    margin: ${props => props.margin || ""};
    padding: 6px 11px;
    line-height: 40px;
    border-radius: 4px;
    border-top: ${props => getBorder(props.borderType)["borderTop"]};
    border-left: ${props => getBorder(props.borderType)["borderLeft"]};
    border-right: ${props => getBorder(props.borderType)["borderRight"]};
    border-bottom: ${props => getBorder(props.borderType)["borderBottom"]};

    &:hover {
        outline: none;
        border-top: ${props => getBorder(props.borderType)["hoverBorderTop"]};
        border-left: ${props => getBorder(props.borderType)["hoverBorderLeft"]};
        border-right: ${props => getBorder(props.borderType)["hoverBorderRight"]};
        border-bottom: ${props => getBorder(props.borderType)["hoverBorderBottom"]};
    }

    &:focus {
        border-top: ${props => getBorder(props.borderType)["hoverBorderTop"]};
        border-left: ${props => getBorder(props.borderType)["hoverBorderLeft"]};
        border-right: ${props => getBorder(props.borderType)["hoverBorderRight"]};
        border-bottom: ${props => getBorder(props.borderType)["hoverBorderBottom"]};
    }
`;

export default Input;

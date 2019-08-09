import styled from 'styled-components';
import { Button } from 'shared/components/html';

const TableActionsContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const TableActionButton = styled(Button).attrs({
    type: "primary",
    margin: "0 20px 0 0"
})``;

const PaginationActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const PaginationButton = styled(Button).attrs({

})``;

export {
    TableActionsContainer,
    TableActionButton,
    PaginationActionContainer,
    PaginationButton
};

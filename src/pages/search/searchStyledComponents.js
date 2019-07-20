import styled from 'styled-components';

const PageContainer = styled.div`
    width: 1040px;
    margin: auto;
    padding: 0 15px;

    @media (max-width: 1200px) {
        padding: 0 40px;
    }

    @media (max-width: 1040px) {
        width: 100%;
    }

    @media (max-width: 991px) {
        padding: 0 15px;
    }
`;
const PageHeader = styled.div`
    padding-bottom: 40px;
`;
const PageContent = styled.div`
`;

export {
    PageContainer,
    PageHeader,
    PageContent
};

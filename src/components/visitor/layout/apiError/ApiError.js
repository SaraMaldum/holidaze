import styled from 'styled-components';

const ApiError = styled.p`
    margin-top: 50px;
    text-align: center; 
    font-weight: bold; 
    font-size: 24px;
    color: ${({theme}) => theme.colors.error};
`;

export default ApiError;
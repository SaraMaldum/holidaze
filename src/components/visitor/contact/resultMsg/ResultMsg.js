import styled from 'styled-components';

const SentMsg = styled.p`
    font-weight: bold;
    color: ${({theme}) => theme.colors.orange};
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
`; 

export default SentMsg;
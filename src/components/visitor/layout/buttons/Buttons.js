import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
    color: white;
    background-color: ${({ theme }) => theme.colors.orange};
    border: 2px solid #EB8F2D;
    font-weight: bold;
    text-transform: uppercase;
    margin: 10px 0;   
    padding: 10px;
    font-family: 'Fira Sans', sans-serif;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, .5);
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        border: 2px solid #EB8F2D;
        color: #EB8F2D;
        transition: 0.4s;
    }
`;

export default StyledButton;
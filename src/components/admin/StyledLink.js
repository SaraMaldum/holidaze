import styled from 'styled-components';
import{ NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.orange};
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    
    &:hover {
        color: ${({ theme }) => theme.colors.mainBlue};
        text-decoration: none;
        transition: .3s;
        border-bottom: 3px solid #00749E;
    }
`

export default StyledLink; 
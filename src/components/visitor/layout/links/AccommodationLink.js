import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AccommodationLink = styled(NavLink)`
    color: ${({theme}) => theme.colors.mainBlue};
    border-left: 1px solid #EB8F2D;
    padding: 10px;
    
    &:hover {
        text-decoration: none; 
        font-weight: bold;
        color: ${({theme}) => theme.colors.mainBlue};
        border-left: 3px solid #EB8F2D;
    }
`;

export default AccommodationLink;
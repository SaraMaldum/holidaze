import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AutContext";
import { RiLogoutCircleRLine } from 'react-icons/ri';
import Buttons from '../visitor/layout/buttons/Buttons';
import styled from 'styled-components';

const LogoutBtn = styled(Buttons)`
    color: ${({ theme }) => theme.colors.orange};
    text-transform: uppercase;
    font-weight: bold;
    padding: 0;
    background-color: transparent;
    border: none;
    box-shadow: none;
    text-align: left; 
    margin: 0 auto;

    &:hover {
        color: ${({ theme }) => theme.colors.mainBlue};
        text-decoration: none;
        transition: .3s;
        border: none;
        background-color: transparent;        
    }
`; 

const LogoutIcon = styled(RiLogoutCircleRLine)`
    font-size: 22px;
    font-weight: bold;
`; 

function Logout() {
    const { logout } = useContext(AuthContext);
    const history = useHistory();

    function doLogout() {
        logout();
        history.push("/");
    }

    return <LogoutBtn onClick={doLogout}><LogoutIcon /> Log out </LogoutBtn>;
}

export default Logout;
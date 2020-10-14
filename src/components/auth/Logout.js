import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AutContext";
import { RiLogoutCircleRLine } from 'react-icons/ri';
import Buttons from '../visitor/layout/buttons/Buttons';
import styled from 'styled-components';

const LogoutBtn = styled(Buttons)`
    background-color: transparent;
    padding: 10px 15px;
    border: none;
    color: ${({theme}) => theme.colors.white};
    box-shadow: none;
    text-align: left; 
    margin: -2px 0 0 -2px;

    &:hover {
        border: none;
        border-bottom: 3px solid #EB8F2D;
        background-color: transparent;
        color: ${({theme}) => theme.colors.darkBlue};
        transition: 0.4s;
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

    return <LogoutBtn onClick={doLogout}><LogoutIcon /> </LogoutBtn>;
}

export default Logout;
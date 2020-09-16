import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.footer `
    text-align: center;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.white};
    padding-top: 10px;

    .followTxt {
        font-weight: bold;
        margin: 0 auto;
    }

    .someIcon {
        margin: 5px; 
        font-size: 26px;
    }
` 

function Footer() {
    return(
        <>
        <StyledFooter>
            <p className="followTxt">Follow us</p>
            <FaFacebook className="someIcon"/>
            <FaInstagram className="someIcon"/>
            <p>Contact us</p>
            <p>&copy; Sara Maldum</p>
            </StyledFooter>
        </>
    )
}

export default Footer; 
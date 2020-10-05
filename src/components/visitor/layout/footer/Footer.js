import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import StyledLink from '../link/ContactLink';
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
        margin: 10px; 
        font-size: 26px;

        &:hover {
            color: ${({theme}) => theme.colors.orange};
            cursor: pointer;
            transition: .3s;
        }
    }
` 

function Footer() {
    return(
        <>
            <StyledFooter>
                <div>
                    <p className="followTxt">Follow us</p>
                    <FaFacebook className="someIcon"/>
                    <FaInstagram className="someIcon"/>
                </div>
                <StyledLink title="Contact us" />
                <p>&copy; Sara Maldum</p>
            </StyledFooter>
        </>
    )
}

export default Footer; 
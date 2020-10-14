import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import StyledLink from '../links/ContactLink';
import StyledFooter from './StyledFooter';

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
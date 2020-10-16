import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { VscMenu } from 'react-icons/vsc';
import logo from '../../../../images/logoHolidaze.png';
import HeaderContainer from '../header/HeaderContainer';
import { AuthContext } from "../../../../context/AutContext";
import UserIcon from './UserIcon';
import styled from 'styled-components';

//Styles components
const StyledLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.white};
    padding: 10px 15px;
    text-transform: uppercase;
    border-bottom: 1px solid #FFFFFF;
    font-weight: bold;
    
    &:hover {
        color: ${({ theme }) => theme.colors.darkBlue};
        text-decoration: none;
        transition: .4s;
        border-bottom: 3px solid #EB8F2D;
    }
`;

const style = {
    fontWeight: 'bold',
    color: '#004B66',
    borderBottom: '3px solid #EB8F2D',
}

const Logo = styled.img`
    width: 180px;
    filter: drop-shadow(-0.9px 1px 1px rgba(0,0,0,.9)); 

    &:hover {
        width: 186px;
        transition: .4s;
    }
`;

const StyledBurger = styled(VscMenu)`
    color: ${({ theme }) => theme.colors.white};
    font-size: 30px;
`; 

//Navbar function
function NavBar() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <HeaderContainer>
                <Navbar expand="lg">
                    <NavLink to="/">
                        <Navbar.Brand className="mr-auto"><Logo src={logo} alt="logo" /></Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <StyledBurger />                
                    </Navbar.Toggle>    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <StyledLink to="/" activeStyle={style} exact>
                                Home
                            </StyledLink>
                            <StyledLink to="/accommodations" activeStyle={style}>
                                Accommodations
                            </StyledLink>
                            <StyledLink to="/contact" activeStyle={style}>
                                Contact us
                            </StyledLink>
                            {user ? (
                                <>
                                    <StyledLink to="/admin" activeStyle={style}>Admin </StyledLink>
                                </>
                            ) : (
                                <StyledLink to="/register" activeStyle={style}> <UserIcon /> </StyledLink>
                            )}                            
                        </Nav>
                    </Navbar.Collapse>  
                </Navbar>
            </HeaderContainer>
        </>
    );
}

export default NavBar;

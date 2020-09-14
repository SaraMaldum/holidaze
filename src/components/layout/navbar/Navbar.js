import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from '../../home/Home';
import Contact from '../../contact/Contact';
import logo from '../../../images/logo.png';
import BgImg from '../../../images/bea-fladstad-3IN0hvhUCiY-unsplash.jpg'
import Buttons from '../buttons/Buttons';
import styled from 'styled-components';
import Accommodations from '../../accommodations/Accommodations';

//Styles components
const StyledNavbar = styled(Navbar)`   
    background-image: url(${BgImg});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    height: 715px;
`

const StyledLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.orange};
    padding: 10px 15px;
    text-transform: uppercase;
    border-bottom: 1px solid #EB8F2D;
    font-weight: bold;
    
    &:hover {
        color: ${({ theme }) => theme.colors.orange};
        text-decoration: none;
        transition: .3s;
        font-style: italic;
    }
`;

const style = {
    fontWeight: 'bold',
    borderBottom: '3px solid #EB8F2D',
}

const Logo = styled.img`
    width: 100px;

    &:hover {
        width: 106px;
        transition: .3s;
        filter: drop-shadow(2px 2px 5px #004B66); 
    }
`

//Navbar function
function NavBar() {
    return (
        <Router>
            <StyledNavbar variant="dark" expand="lg">
                <Container fluid>
                    <NavLink to="/">
                        <Navbar.Brand className="mr-auto"><Logo src={logo} alt="logo" /></Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <StyledLink to="/" activeStyle={style} exact>
                                Home
                            </StyledLink>
                            <StyledLink to="/accommodations" activeStyle={style} exact>
                                Accommodations
                            </StyledLink>
                            <StyledLink to="/contact" activeStyle={style} exact>
                                Contact us
                            </StyledLink>
                        </Nav>
                    </Navbar.Collapse>
                    
                </Container>
            </StyledNavbar>
            <Container>
                <Buttons href="#">Accommodations</Buttons>
                <Buttons href="#">Contact us</Buttons>
            </Container>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/accommodations" component={Accommodations} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default NavBar;

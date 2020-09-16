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
import Login from '../../../admin/login/Login';
import logo from '../../../../images/logo.png';
import BgImg from '../../../../images/bea-fladstad-3IN0hvhUCiY-unsplash.jpg'
import Buttons from '../buttons/Buttons';
import styled from 'styled-components';
import Accommodations from '../../accommodations/Accommodations';
import {FaUserAlt} from 'react-icons/fa';

//Styles components
const StyledContainer = styled(Container)`   
    background-image: url(${BgImg});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position:  center;
    height: 90vh;
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
`

const style = {
    fontWeight: 'bold',
    borderBottom: '3px solid #EB8F2D',
}

const Logo = styled.img`
    width: 150px;

    &:hover {
        width: 156px;
        transition: .3s;
        filter: drop-shadow(2px 2px 5px #004B66); 
    }
`
const HeaderBtn = styled(Buttons)`
    margin: -30px 0;
` 


//Navbar function
function NavBar() {
    return (
        <Router>
            <StyledContainer fluid>
            <Navbar variant="dark" expand="lg">
                    <NavLink to="/">
                        <Navbar.Brand className="mr-auto"><Logo src={logo} alt="logo" /></Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                            <StyledLink to="/login" activeStyle={style}>
                                <FaUserAlt />
                            </StyledLink>
                        </Nav>
                    </Navbar.Collapse>
                    
            </Navbar>
            </StyledContainer>

            <Container>
                <HeaderBtn href="#" className="float-left">Accommodations</HeaderBtn>
                <HeaderBtn href="#" className="float-right">Contact us</HeaderBtn>
            </Container>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/accommodations" component={Accommodations} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default NavBar;

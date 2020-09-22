import React from "react";
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
import logo from '../../../../images/logo.png';
import BgImg from '../../../../images/headerImg.jpg'
import styled from 'styled-components';
import HeaderButton from './HeaderButton';
import Accommodations from '../../accommodations/Accommodations';
import Detail from '../../accommodations/detailed/Detail';
import ContactMsg from '../../../admin/contactMsg/ContactMsg';
import AddAccommodation from "../../../admin/edit/AddAccommodation";
import AdminDashboard from "../../../admin/AdminDashboard";
import DeleteAccommodation from "../../../admin/edit/DeleteAccommodation";
import EditAccommodation from "../../../admin/edit/EditAccommodation";
import BookingEnquiries from "../../../admin/enquiries/BookingEnquiries";
import Enquiry from "../../enquiry/Enquiry";

//Styles components
const StyledContainer = styled(Container)`   
    background-image: url(${BgImg});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center;
    height: 50vh;
`

const StyledLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.white};
    padding: 10px 15px;
    text-transform: uppercase;
    border-bottom: 1px solid #FFFFFF;
    font-weight: bold;
    
    &:hover {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        transition: .3s;
        border-bottom: 3px solid #EB8F2D;
    }
`

const style = {
    fontWeight: 'bold',
    borderBottom: '3px solid #FFFFFF',
}

const Logo = styled.img`
    width: 150px;
    filter: drop-shadow(-0.9px 1px 1px rgba(255,255,255,.9)); 

    &:hover {
        width: 156px;
        transition: .3s;
        filter: drop-shadow(1px 2px 5px white); 
    }
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
                            <StyledLink to="/admin" activeStyle={style}>
                                Admin
                            </StyledLink>                            
                        </Nav>
                    </Navbar.Collapse>  
                </Navbar>
            </StyledContainer>
            <HeaderButton />
            
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/accommodations" component={Accommodations} />
                <Route path="/contact" component={Contact} />
                <Route path="/enquiry/:id" component={Enquiry} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/addAccommodation" component={AddAccommodation} />
                <Route path="/deleteAccommodation" component={DeleteAccommodation} />
                <Route path="/editAccommodation" component={EditAccommodation} />
                <Route path="/contactMsg" component={ContactMsg} />
                <Route path="/enquiries" component={BookingEnquiries} />
            </Switch>
        </Router>
    );
}

export default NavBar;

import React from 'react';
import Container from 'react-bootstrap/Container';
import{NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { BsPlusCircleFill,BsCalendarFill } from 'react-icons/bs';
import { AiFillDelete, AiFillEdit, AiFillMessage } from 'react-icons/ai';

const StyledUl = styled.ul`
    margin-top: 50px; 
`
const StyledLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.orange};
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px;
    
    &:hover {
        color: ${({ theme }) => theme.colors.mainBlue};
        text-decoration: none;
        transition: .3s;
        border-bottom: 3px solid #00749E;
    }
`

const StyledList = styled.li`
    display: inline-block;

    @media (max-width: 768px) {
        display: block;
        padding: 10px;
    }
`
const style = {
    fontWeight: 'bold',
    borderBottom: '3px solid #00749E',
    color: '#00749E',
}

function AdminMenu(){
    return(
        <>
                <StyledUl className="text-center">
                    <StyledList>
                        <StyledLink to="/addAccommodation" activeStyle={style} ><BsPlusCircleFill /> Add</StyledLink>
                    </StyledList>
                    <StyledList>
                        <StyledLink to="/deleteAccommodation" activeStyle={style} ><AiFillDelete /> Delete</StyledLink>
                    </StyledList>
                    <StyledList>
                        <StyledLink to="/editAccommodation" activeStyle={style} ><AiFillEdit /> Edit</StyledLink>
                    </StyledList>
                    <StyledList>
                        <StyledLink to="/contactMsg" activeStyle={style} ><AiFillMessage /> Contact messages</StyledLink>
                    </StyledList>
                    <StyledList>
                        <StyledLink to="/enquiries" activeStyle={style} ><BsCalendarFill /> Booking enquiries</StyledLink>
                    </StyledList>
                </StyledUl>
        </>     
    )
}

export default AdminMenu;
import React from 'react';
import { BsPlusCircleFill, BsCalendarFill } from 'react-icons/bs';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import StyledLink from './StyledLink';
import Logout from '../auth/Logout';
import styled from 'styled-components';

const StyledUl = styled.ul`
    margin-top: 20px; 
    font-family: 'Fira Sans', sans-serif;   

    @media (max-width: 768px) {
        margin: 0;
        padding: 0;
    }
`;

const StyledList = styled.li`
    display: inline-block;
    
    @media (max-width: 768px) {
        display: block;
        padding: 5px 0;
        text-align: center;
        margin-bottom: 5px;
    }
`;

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
                    <StyledLink to="/admin" activeStyle={style} ><AiFillHome /> Admin</StyledLink>
                </StyledList>

                <StyledList>
                    <StyledLink to="/admin/add" activeStyle={style} ><BsPlusCircleFill /> Add</StyledLink>
                </StyledList>

                <StyledList>
                    <StyledLink to="/admin/messages" activeStyle={style} ><AiFillMessage /> Contact messages</StyledLink>
                </StyledList>

                <StyledList>
                    <StyledLink to="/admin/enquiries" activeStyle={style} ><BsCalendarFill /> Booking enquiries</StyledLink>
                </StyledList>

                <StyledList>
                    <StyledLink to="/" ><Logout /> </StyledLink>
                </StyledList>
            </StyledUl>
        </>     
    )
}

export default AdminMenu;
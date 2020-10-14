import React from 'react';
import { BsPlusCircleFill, BsCalendarFill } from 'react-icons/bs';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import StyledLink from './StyledLink';
import styled from 'styled-components';

const StyledUl = styled.ul`
    margin-top: 20px; 
    font-family: 'Fira Sans', sans-serif;
`;

const StyledList = styled.li`
    display: inline-block;

    @media (max-width: 768px) {
        display: block;
        padding: 10px;
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
            </StyledUl>
        </>     
    )
}

export default AdminMenu;
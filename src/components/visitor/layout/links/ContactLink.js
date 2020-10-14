import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};

    &:hover {
        color: ${({theme}) => theme.colors.orange};
        text-decoration: none;
        transition: .3s;
    }
`; 

function ContactLink({title}) {
    return (
        <StyledLink href="/contact">{title}</StyledLink>
    )
}

export default ContactLink;
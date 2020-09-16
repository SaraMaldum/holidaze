import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};

    &:hover {
        color: ${({theme}) => theme.colors.white};
        font-style: italic;
        text-decoration: none;
    }
` 

function ContactLink({title}) {
    return (
            <StyledLink href="Contact">{title}</StyledLink>
    )
}

export default ContactLink;
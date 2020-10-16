import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

ContactLink.propTypes = {
    title: PropTypes.string.isRequired
};

export default ContactLink;
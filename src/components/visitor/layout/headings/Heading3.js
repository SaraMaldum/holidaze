import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading3 = styled.h3`
    margin-top: 20px;
    text-align: center;
    color: ${({theme}) => theme.colors.mainBlue};
    font-weight: bold;
    font-size: 20px;

    &:hover {
        color: ${({theme}) => theme.colors.orange};
        text-decoration: none;
        transition: .3s;
    }
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

function H3({title}) {
    return <Heading3>{title}</Heading3>
}

H3.propTypes = {
    title: PropTypes.string.isRequired
};

export default H3;
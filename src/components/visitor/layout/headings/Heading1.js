import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading1 = styled.h1`
    margin-top: 50px;
    text-align: center;
    color: ${({theme}) => theme.colors.mainBlue};
    font-weight: bold;
        
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

function H1({title}) {
    return <Heading1>{title}</Heading1>
}

H1.propTypes = {
    title: PropTypes.string.isRequired
};

export default H1;
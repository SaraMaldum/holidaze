import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading2 = styled.h2`
    margin-top: 20px;
    text-align: center;
    color: ${({theme}) => theme.colors.mainBlue};
    font-weight: bold;
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`; 

function H2({title}) {
    return <Heading2>{title}</Heading2>
}

H2.propTypes = {
    title: PropTypes.string.isRequired
};

export default H2;
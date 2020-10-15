import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DetailHeading2 = styled.h2`
    margin-top: 20px;
    text-align: left;
    color: ${({theme}) => theme.colors.mainBlue};
    font-weight: bold;
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`; 

function SearchH2({title}) {
    return <DetailHeading2>{title}</DetailHeading2>
}

SearchH2.propTypes = {
    title: PropTypes.string.isRequired
};

export default SearchH2;
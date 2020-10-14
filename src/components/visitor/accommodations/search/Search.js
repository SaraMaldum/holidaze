import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl  } from 'react-bootstrap';
import styled from 'styled-components';

const StyledSearchField = styled(FormControl)`
    border: 2px solid #00749E;
    color: ${({theme}) => theme.colors.darkBlue};    
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    
    &:focus {
        background-color: #fff;
        border-color: ${({theme}) => theme.colors.orange};
        outline: 0;
        transition: .3s;
    }
`;

export default function Search({ handleSearch }) {
    return (
        <>
            <InputGroup>
                <StyledSearchField placeholder="Search by name..."
                    onChange={event => handleSearch(event)} />
            </InputGroup>
        </>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
};
import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components';
import Heading2 from '../headings/Heading2';

const StyledSearchField = styled(InputGroup)`
    margin-bottom: 20px;
    border: 2px solid #EB8F2D;
    border-radius: 5px;
`

export default function Search({ handleSearch }) {
    return (
        <>
            <Heading2 title="Find your accommodation:"/>
            <StyledSearchField>
                <FormControl placeholder="Search..." type="text"
                    onChange={event => handleSearch(event)} />
            </StyledSearchField>
        </>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
};
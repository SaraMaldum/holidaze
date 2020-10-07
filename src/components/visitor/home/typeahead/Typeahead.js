import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import { BASE_URL, headers } from '../../../../constants/api';
import { Col } from 'react-bootstrap';
import { GoSearch} from 'react-icons/go';
import Buttons from '../../layout/buttons/Buttons';
import styled from 'styled-components';

const StyledCol = styled(Col)`
    border: '1px solid #ddd',
    height: '116px',
    overflowY: 'scroll',
    padding: '40px',
` 

const StyledTypeahead = styled(Typeahead)`

    .rbt-input {
        border: 2px solid #00749E;
        color: ${({theme}) => theme.colors.mainBlue};    
        width: 100%;
        padding: 17.4px;
        border-radius: 10px;

        &:focus {
            background-color: #fff;
            border-color: ${({theme}) => theme.colors.orange};
            outline: 0;
            transition: .3s;
        }
    } 
` 

const SearchIcon = styled(Buttons)`
    position: absolute;
    right: 0;
    top: 0;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.lightOrange};
    border: 1px solid #EB8F2D;
    border-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin: 0;
    padding: 3.4px 20px;
    font-size: 20px;

    &:hover {
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.orange};
        border: 1px solid #EB8F2D;
    }
`


function Search() {
    const [filteredSearch, setFilteredSearch ] = useState([]);

    const options = { headers };
    const typeaheadURL = BASE_URL + 'establishments';

    useEffect(() => {
        fetch(typeaheadURL, options)
            .then((response) => response.json())
            .then((json) => setFilteredSearch(json))
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    console.log(typeaheadURL, filteredSearch)
    
    return(
        <>
            <StyledCol>
                <StyledTypeahead 
                    id="id"
                    labelKey="name"
                    options={filteredSearch}
                    placeholder="Search by name..."
                >
                    <SearchIcon type="submit" href={`/detail/${filteredSearch.id}`}><GoSearch /></SearchIcon> 
                </StyledTypeahead>
            </StyledCol>
        </>
    )
}

export default Search;
import React, { useState, useEffect } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead'; 
import { BASE_URL, headers } from '../../../../constants/api';
import { Col } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import Buttons from '../../layout/buttons/Buttons';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const StyledCol = styled(Col)`
    border: '1px solid #ddd',
    height: '116px',
    overflowY: 'scroll',
    padding: '40px',
` 

const StyledTypeahead = styled(AsyncTypeahead)`

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
    const [searchAccommodation, setSearchAccommodation] = useState([]);
    const [filteredSearch, setFilteredSearch] = useState([]);

    const establishmentURL = BASE_URL + 'establishments';

    const options = { headers };

    useEffect(() => {
        fetch(establishmentURL, options)
            .then((response) => response.json())
            .then((json) => {
                setSearchAccommodation(json)
                setFilteredSearch(json);

            })
            .catch((error) => console.log(error))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    //Search field
    const filterAccommodation = function (e) {
        const searchValue = e.target.value.toLowerCase();

        const filteredArray = searchAccommodation.filter(function (specificAccommodation) {
            const lowerCaseName = specificAccommodation.name.toLowerCase();

            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
    });
    setFilteredSearch(filteredArray);
    }
    
    return (
        <>

                <Search handleSearch={filterAccommodation}/>
                {filteredSearch.length === 0 && <p>No results</p>}
                <div>
                    {filteredSearch.map(search => {
                        const {id, name} = Search;
                        return (
                            <Col sm={6} md={4} lg={3} key={id}>
                                <AsyncTypeahead
                                    id={id}
                                    name={name}
                                    labelKey="login"
                                    minLength={3}
                                    onSearch={filterAccommodation}
                                    options={filteredSearch}
                                    placeholder="Search for a Github user..."
                                    
                                />   
                            </Col>
                        );
                    })}
                </div>
        </>
    );
}

export default Search;
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../../../../constants/api';
import { Col } from 'react-bootstrap';
import StyledTypeahead from './StyledTypeahead';
import StyledContainer from '../../layout/containerStyle/StyledContainer';
import ApiError from '../../layout/apiError/ApiError';
import styled from 'styled-components';

const StyledCol = styled(Col)`
    border: '1px solid #ddd',
    height: '116px',
    overflowY: 'scroll',
`;

function Search() {
    const [searchAccommodation, setSearchAccommodation] = useState([]);
    const [serverError, setServerError] = useState(false);
    
    const history = useHistory();

    const options = { headers };
    const establishmentURL = BASE_URL + "establishments";


    useEffect(() => {
        fetch(establishmentURL, options)
            .then((response) => response.json())
            .then(json => {
                if(json.error) {
                    setServerError(true);
                }
                else {
                    const accommodations = json.map(function (accommodation) {
                        return { id: accommodation.id, label: accommodation.name };
                    });
                    setSearchAccommodation(accommodations);
                }
            })
            .catch(error => setServerError(true))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function goToAccommodation(accommodation) {
        console.log("accommodation", accommodation);
        
        history.push('/detail/' + accommodation[0].id);
    }

    if(serverError) {
        return <StyledContainer><ApiError>There was an error fetching the data</ApiError></StyledContainer>
    }

    return (
        <>
            <StyledCol>
                <StyledTypeahead
                    id="search"
                    minLength={0}
                    options={searchAccommodation}
                    onChange={(selected) => {
                        goToAccommodation(selected);
                    }}
                    placeholder="Search accommodation..."
                />
            </StyledCol>
        </>
    );
}

export default Search;

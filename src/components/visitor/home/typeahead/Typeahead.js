import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL, headers } from '../../../../constants/api';
import { Col } from 'react-bootstrap';
import StyledTypeahead from './StyledTypeahead';
import styled from 'styled-components';

const StyledCol = styled(Col)`
    border: '1px solid #ddd',
    height: '116px',
    overflowY: 'scroll',
    padding: '40px',
`;

function Search() {
    const history = useHistory();

    const [searchAccommodation, setSearchAccommodation] = useState([]);
    const options = { headers };
    const establishmentURL = BASE_URL + "establishments";


    useEffect(() => {
        fetch(establishmentURL, options)
            .then((response) => response.json())
            .then((json) => {
                const accommodations = json.map(function (accommodation) {
                    return { id: accommodation.id, label: accommodation.name };
                });
                setSearchAccommodation(accommodations);
            })
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function goToAccommodation(accommodation) {
        console.log("accommodation", accommodation);
        
        history.push('/detail/' + accommodation[0].id);
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

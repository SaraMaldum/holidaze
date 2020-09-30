import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import Heading2 from '../visitor/layout/headings/Heading2';
import { Col, Row } from "react-bootstrap";
import styled from 'styled-components';

const AccommodationLink = styled(NavLink)`
    color: ${({theme}) => theme.colors.mainBlue};

    &:hover {
        text-decoration: none; 
        font-weight: bold;
        color: ${({theme}) => theme.colors.mainBlue};

    }
` 
const StyledRow = styled(Row)`
    margin-bottom: 10px;
` 

function Accommodations() {
    const [accommodations, setAccommodations] = useState([]);
    const [error, setError] = useState(null);

    const overviewURL = BASE_URL + "establishments";

    const options = { headers };

    useEffect(() => {
        fetch(overviewURL, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setAccommodations([]);
                    setError(json.message);
                } else {
                    setAccommodations(json);
                }
            })
            .catch((error) => console.log(error));
    }, [options, overviewURL]);

    return (
        <>
            <Heading2 title="Click to edit"/>
            {error && <div className="error">{error}</div>}
            <StyledRow>
                {accommodations.map((accommodation) => {
                    return (
                        <Col md={3} key={accommodation.id}>
                            <AccommodationLink to={`/edit/${accommodation.id}`}>{accommodation.name}</AccommodationLink>
                        </Col>
                    );
                })}
            </StyledRow>
        </>
    );
}

export default Accommodations;
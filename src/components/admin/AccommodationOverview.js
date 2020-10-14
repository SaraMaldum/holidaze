import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { RiHotelLine } from 'react-icons/ri';
import { BASE_URL, headers } from '../../constants/api';
import Heading2 from '../visitor/layout/headings/Heading2';
import StyledSpinner from '../visitor/layout/spinner/Spinner';
import AccommodationLink from '../visitor/layout/links/AccommodationLink';
import styled from 'styled-components';

const StyledCol = styled(Col)`
    margin: 10px 0;
    padding: 10px;
`;

const StyledHotel = styled(RiHotelLine)`
    font-size: 20px;
`;

function Accommodations() {
    const [accommodations, setAccommodations] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const overviewURL = BASE_URL + 'establishments';

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
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return (
        <>
            <StyledSpinner />
            <Heading2 title="Click to edit"/>
            {error && <div>{error}</div>}

            <Row>
            {accommodations.map((accommodation) => {
                    return (
                        <StyledCol sm={6} md={4} xl={3} key={accommodation.id}>
                            <AccommodationLink to={`/edit/${accommodation.id}`}><StyledHotel /> {accommodation.name}</AccommodationLink>
                        </StyledCol>
                    );
                })}
            </Row>



                
        </>
    );
}

export default Accommodations;
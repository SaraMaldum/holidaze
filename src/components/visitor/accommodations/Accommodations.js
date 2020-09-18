import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import StyledSpinner from '../layout/spinner/Spinner';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import { Typeahead } from 'react-bootstrap-typeahead';
import AccommodationItems from './AccommodationItems';

const StyledSearch = styled(Typeahead)`
    margin: 20px 0;
    
    .rbt-highlight-text {
        color: ${({theme}) => theme.colors.mainBlue};    
    }
    .rbt-input {
        border: 2px solid #EB8F2D;
        color: ${({theme}) => theme.colors.mainBlue};    
        display: block;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 10px;
    }
` 

function Accommodations() {
    const [accommodations, setAccommodations] = useState([]);
    const [loading, setLoading] = useState(true);

    const establishmentURL = BASE_URL + 'establishments';

    const options = { headers };

    useEffect(() => {
        fetch(establishmentURL, options)
            .then((response) => response.json())
            .then((json) => {
                setAccommodations(json)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    },[options, establishmentURL]);


    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }
    
    return (
        <>
            <Container>
                <Heading1 title="Accommodations"/>
                <Heading2 title="Find your accommodations"/>
                <StyledSearch
                    id="accommodations.id"
                    labelKey="name"
                    onChange={setAccommodations.id}
                    options={accommodations}
                    placeholder="Search..."
                    selected={accommodations.id}
                />
                <Row>
                    {accommodations.map(accommodation => {
                        const {id, name, image} = accommodation;
                        return (
                            <Col sm={6} md={4} lg={3} key={id}>
                                <AccommodationItems 
                                    id={id}
                                    name={name}
                                    image={image}
                                />   
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

export default Accommodations;
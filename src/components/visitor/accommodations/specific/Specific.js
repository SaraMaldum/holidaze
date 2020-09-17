import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../../constants/api';
import Heading1 from '../../layout/headings/Heading1';
import Heading2 from '../../layout/headings/Heading2';
import StyledSpinner from '../../layout/spinner/Spinner';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const ImageContainer = styled.p`
    height: 200px;
    margin: 0;
    filter: drop-shadow(2px 2px 2px gray);
` 

function Specific() {
    const [specificAccommodation, setSpecificAccommodation] = useState([]);
    const [loading, setLoading] = useState(true);
    
    let {id} = useParams();

    const spesificURL = BASE_URL + 'establishments' + id;

    useEffect(() => {
        fetch(spesificURL)
            .then(response => response.json())
            .then(json => setSpecificAccommodation(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    });

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return(
        <>
            <Container>
            <Heading1 title={specificAccommodation.name}/>

            <ImageContainer>{specificAccommodation.image}</ImageContainer>
            <Heading2 title="About the hotel" />
            <Col>{specificAccommodation.description}</Col>
            </Container>
        </>
    )
}

export default Specific;
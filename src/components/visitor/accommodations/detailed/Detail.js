import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { BASE_URL, headers } from '../../../../constants/api';
import Heading1 from '../../layout/headings/Heading1';
import Heading2 from '../../layout/headings/Heading2';
import StyledSpinner from '../../layout/spinner/Spinner';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Buttons from '../../layout/buttons/Buttons';

const ImageContainer = styled.p`
    height: 200px;
    margin: 0;
    filter: drop-shadow(2px 2px 2px gray);
` 
const Price = styled.p`
    font-weight: bold;
    color: ${({theme}) => theme.colors.mainBlue};
` 

const Mail = styled.a`
    font-weight: bold;
    color: ${({theme}) => theme.colors.orange};

    &:hover {
        text-decoration: none; 
        color: ${({theme}) => theme.colors.mainBlue};
        transition: .3s;
    }
`

function Specific() {
    const [detailedAccommodation, setdetailedAccommodation] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const options = { headers };
    
    let { id } = useParams();


    const specificURL = BASE_URL + 'establishments/' + id;

    useEffect(() => {
        fetch(specificURL, options)
            .then(response => response.json())
            .then(json => setdetailedAccommodation(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [specificURL, options]);

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return(
        <>
            <Container>
                <Heading1 title={detailedAccommodation.name}/>
                <ImageContainer style={{backgroundImage: `url(${detailedAccommodation.image})` , backgroundPosition: 'center', backgroundSize: 'cover'}}></ImageContainer>

                <Heading2 title="About the hotel" />
                <Col md={12}>
                    <p>{detailedAccommodation.description}</p>
                    <p>At our accommodation, we are able to house {detailedAccommodation.maxGuests} people.</p>
                    <p>If you have any questions directed to us, please send us an email at <Mail href='mailto:example@example.com'>{detailedAccommodation.email}</Mail></p>
                </Col>
                <Col>
                    <Price>{detailedAccommodation.price}€ per night</Price>
                </Col>

                <Col className="text-right">
                    <Buttons>Book now</Buttons>
                </Col>
            </Container>
        </>
    )
}

export default Specific;
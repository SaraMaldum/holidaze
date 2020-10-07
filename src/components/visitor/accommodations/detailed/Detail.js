import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import { BASE_URL, headers } from '../../../../constants/api';
import Heading1 from '../../layout/headings/Heading1';
import Heading2 from '../../layout/headings/Heading2';
import StyledSpinner from '../../layout/spinner/Spinner';
import Buttons from '../../layout/buttons/Buttons';
import styled from 'styled-components';

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

function Detail() {
    const [detailedAccommodation, setdetailedAccommodation] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const options = { headers };
    
    let { id } = useParams();


    const detailURL = BASE_URL + 'establishments/' + id;

    useEffect(() => {
        fetch(detailURL, options)
            .then(response => response.json())
            .then(json => setdetailedAccommodation(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return(
        <>
            <Container>
                <StyledSpinner />
                <Heading1 title={detailedAccommodation.name}/>
                <ImageContainer style={{backgroundImage: `url(${detailedAccommodation.image})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></ImageContainer>

                <Heading2 title="About the hotel" />
                <Col md={12}>
                    <p>{detailedAccommodation.description}</p>
                    <p>If you have any questions directed to us, please send us an email at <Mail href={`mailto:${detailedAccommodation.email}`} >{detailedAccommodation.email}</Mail></p>
                </Col>
                <Col>
                    <Price>{detailedAccommodation.price}€ per night</Price>
                </Col>

                <Col className="text-right">
                    <Buttons href={`/enquiry/${detailedAccommodation.id}`}>Book now</Buttons>
                </Col>
            </Container>
        </>
    )
}

export default Detail;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { BASE_URL, headers } from '../../../../constants/api';
import Heading1 from '../../layout/headings/Heading1';
import DetailHeading2 from '../../layout/headings/DetailHeading2';
import StyledSpinner from '../../layout/spinner/Spinner';
import StyledContainer from '../../layout/containerStyle/StyledContainer';
import Buttons from '../../layout/buttons/Buttons';
import ApiError from '../../layout/apiError/ApiError';
import styled from 'styled-components';

const ImageContainer = styled.p`
    height: 250px;
    margin: 20px 0;
    filter: drop-shadow(2px 2px 2px gray);
`;

const Price = styled.p`
    font-weight: bold;
    color: ${({theme}) => theme.colors.mainBlue};
`; 

const Mail = styled.a`
    font-weight: bold;
    color: ${({theme}) => theme.colors.orange};

    &:hover {
        text-decoration: none; 
        color: ${({theme}) => theme.colors.mainBlue};
        transition: .3s;
    }
`;

function Detail() {
    const [detailedAccommodation, setdetailedAccommodation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [serverError, setServerError] = useState(false);
    
    const options = { headers };
    
    let { id } = useParams();

    const detailURL = BASE_URL + 'establishments/' + id;

    useEffect(() => {
        fetch(detailURL, options)
            .then(response => response.json())
            .then(json => {
                if(json.error) {
                    setServerError(true);
                }
                else {
                    setdetailedAccommodation(json)
                }
            })
            .catch(error => setServerError(true))
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }
    
    if(serverError) {
        return <StyledContainer><ApiError>There was an error fetching the data</ApiError></StyledContainer>
    }

    return(
        <>
            <StyledContainer>
                <StyledSpinner />
                <Heading1 title={detailedAccommodation.name}/>
                <Row>
                    <Col md={6}>
                        <ImageContainer style={{backgroundImage: `url(${detailedAccommodation.image})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></ImageContainer>
                    </Col>

                    <Col md={6}>
                        <DetailHeading2 title="About the accommodation" />
                        <div>
                            <p>{detailedAccommodation.description}</p>
                            <p>If you have any questions directed to us, please send us an email at <Mail href={`mailto:${detailedAccommodation.email}`} >{detailedAccommodation.email}</Mail></p>
                            <div>
                                {detailedAccommodation.selfCatering 
                                ? <p>{detailedAccommodation.name} has self catering.</p> 
                                : <p>{detailedAccommodation.name} does not have self catering.</p>
                                }
                            </div>
                        </div>
                        <div>
                            <Price>{detailedAccommodation.price}€ per night for one person.</Price>
                        </div>

                        <div className="text-right">
                            <Buttons href={`/booking/${detailedAccommodation.id}`}>Booking</Buttons>
                        </div>
                    </Col>
                </Row>
            </StyledContainer>
        </>
    )
}

export default Detail;
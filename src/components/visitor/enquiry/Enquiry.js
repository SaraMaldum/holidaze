import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {BASE_URL, headers} from '../../../constants/api';
import Heading1 from '../layout/headings/Heading1';
import DetailHeading2 from '../layout/headings/DetailHeading2';
import StyledSpinner from '../layout/spinner/Spinner';
import StyledContainer from '../layout/containerStyle/StyledContainer';
import EnquiryForm from './EnquiryForm';
import ApiError from '../layout/apiError/ApiError';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

const ImageContainer = styled.p`
    height: 300px;
    margin: 30px 0;
    filter: drop-shadow(2px 2px 2px gray);
`; 

function Enquiry() {
    const [enquiry, setEnquiry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [serverError, setServerError] = useState(false);

    const options = {headers};

    let { id } = useParams();

    const enquiryURL = BASE_URL + 'establishments/' + id;

    useEffect(() => {
        fetch(enquiryURL, options) 
            .then(response => response.json())
            .then(json => {
                if(json.error) {
                    setServerError(true);
                }
                else {
                    setEnquiry(json)
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
                <Heading1 title="Booking enquiry"/>
                <Row>
                    <Col md={6}>
                        <ImageContainer style={{backgroundImage: `url(${enquiry.image})` , backgroundPosition: 'center', backgroundSize: 'cover'}}></ImageContainer>
                    </Col>
                    <Col md={6}>
                        <DetailHeading2 title={enquiry.name}  />
                        <EnquiryForm />
                    </Col>
                </Row>
            </StyledContainer>
        </>
    )
}

export default Enquiry;
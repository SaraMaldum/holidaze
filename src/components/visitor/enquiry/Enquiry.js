import React, { useState, useEffect } from 'react';
import Buttons from '../layout/buttons/Buttons';
import { Container, Col } from 'react-bootstrap';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import {BASE_URL, headers} from '../../../constants/api';
import { useParams } from 'react-router-dom';
import StyledSpinner from '../layout/spinner/Spinner';
import styled from 'styled-components';
import EnquiryForm from './EnquiryForm';

const ImageContainer = styled.p`
    height: 200px;
    margin: 0;
    filter: drop-shadow(2px 2px 2px gray);
` 


function Enquiry() {
    const [enquiry, setEnquiry] = useState(null);
    const [loading, setLoading] = useState(true);

    const options = {headers};

    let {id} = useParams();

    const enquiryURL = BASE_URL + "establishments/" + id;

    useEffect(() => {
        fetch(enquiryURL, options) 
            .then(response => response.json())
            .then(json => setEnquiry(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [enquiryURL, options]);

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }
    
    return(
        <>
            <Container>
                <Heading1 title="Booking enquiry"/>
                <Heading2 title={enquiry.name} />
                <ImageContainer style={{backgroundImage: `url(${enquiry.image})` , backgroundPosition: 'center', backgroundSize: 'cover'}}></ImageContainer>
                <EnquiryForm />

            </Container>
        </>
    )
}

export default Enquiry;
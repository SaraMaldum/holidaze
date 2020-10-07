import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {BASE_URL, headers} from '../../../constants/api';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import StyledSpinner from '../layout/spinner/Spinner';
import EnquiryForm from './EnquiryForm';
import styled from 'styled-components';

const ImageContainer = styled.p`
    height: 200px;
    margin: 0 0 10px 0;
    filter: drop-shadow(2px 2px 2px gray);
` 

function Enquiry() {
    const [enquiry, setEnquiry] = useState(null);
    const [loading, setLoading] = useState(true);

    const options = {headers};

    let { id } = useParams();

    const enquiryURL = BASE_URL + 'establishments/' + id;

    useEffect(() => {
        fetch(enquiryURL, options) 
            .then(response => response.json())
            .then(json => setEnquiry(json))
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
                <Heading1 title="Booking enquiry"/>
                <Heading2 title={enquiry.name}  />
                <ImageContainer style={{backgroundImage: `url(${enquiry.image})` , backgroundPosition: 'center', backgroundSize: 'cover'}}></ImageContainer>
                <EnquiryForm />
            </Container>
        </>
    )
}

export default Enquiry;
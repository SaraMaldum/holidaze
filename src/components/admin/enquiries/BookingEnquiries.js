import React, {useState, useEffect} from 'react';
import Heading1 from '../../visitor/layout/headings/Heading1';
import {Container, Col, Row } from 'react-bootstrap';
import AdminMenu from '../AdminMenu';
import { useHistory } from 'react-router-dom';
import {BASE_URL, headers, GET} from '../../../constants/api';
import { useForm } from "react-hook-form";
import Heading2 from '../../visitor/layout/headings/Heading2';
import StyledSpinner from '../../visitor/layout/spinner/Spinner';

function BokoingEnquiries() {
    const history = useHistory();
    const { handleSubmit } = useForm();
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    const options = { headers };
    const enquiryURL = BASE_URL + 'enquiries';

    useEffect(() => {
        fetch(enquiryURL, options)
        .then((response) => response.json())
        .then((json) => setEnquiries(json))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, [enquiryURL, options]);
    
    console.log(enquiries)
    async function onSubmit(data) {
        console.log(data)

        const updateOptions = {headers, method: GET, body: JSON.stringify(data)};

        await fetch(enquiryURL, updateOptions);

        history.push("/admin/enquiries/enquiries")
    }

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return(
        <>
            <Container>
                <Heading1 title="Booking enquiries" />
                <AdminMenu />
                <StyledSpinner />
                <Row onSubmit={handleSubmit(onSubmit)}>
                {enquiries.map((enquiry) => {
                    return (
                        <Col md={4} key={enquiry.establishmentId}>
                            <Heading2 title={enquiry.name} />
                            <p>Email address: {enquiry.email}</p>
                            <p>Date: {enquiry.checkIn} to {enquiry.checkOut}</p>
                        </Col>
                    );
                })}
                    
                </Row>
                
            </Container>
        </>
    )
}

export default BokoingEnquiries;
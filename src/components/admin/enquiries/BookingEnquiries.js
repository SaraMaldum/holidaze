import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { RiSendPlaneFill } from 'react-icons/ri'
import { BASE_URL, headers, GET } from '../../../constants/api';
import AdminMenu from '../AdminMenu';
import Heading1 from '../../visitor/layout/headings/Heading1';
import Heading2 from '../../visitor/layout/headings/Heading2';
import StyledSpinner from '../../visitor/layout/spinner/Spinner';
import DeleteEnquiry from './DeleteEnquiry';
import StyledContainer from '../../visitor/layout/containerStyle/StyledContainer';
import Buttons from '../../visitor/layout/buttons/Buttons';
import moment from 'moment';
import ApiError from '../../visitor/layout/apiError/ApiError';
import styled from 'styled-components';

const EnquiryCol = styled(Col)`
    border-right: 1px solid #EB8F2D;
    margin: 10px 0;

    @media (max-width: 576px) {
        border-bottom: 1px solid #EB8F2D;
        border-right: none;
    }
`;

function BokoingEnquiries() {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [serverError, setServerError] = useState(false);
    const { handleSubmit } = useForm();

    const history = useHistory();
      
    const options = { headers };
    const enquiryURL = BASE_URL + 'enquiries';

    useEffect(() => {
        fetch(enquiryURL, options)
        .then((response) => response.json())
        .then(json => {
            if(json.error) {
                setServerError(true);
            }
            else {
                setEnquiries(json)
            }
        })
        .catch(error => setServerError(true))
        .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
        
    async function onSubmit(data) {
        console.log(data)

        const updateOptions = {headers, method: GET, body: JSON.stringify(data)};

        await fetch(enquiryURL, updateOptions);

        history.push("/admin/enquiries")
    }

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
                <Heading1 title="Booking enquiries" />
                <AdminMenu />
                <Row onSubmit={handleSubmit(onSubmit)}>
                    {enquiries.map((enquiry) => {
                        return (
                            <EnquiryCol md={4} key={enquiry.id}>
                                <Heading2 title={enquiry.name} />
                                <p>Accommodation id: {enquiry.establishmentId}</p>
                                <p>Email address: {enquiry.email}</p>
                                <p>Check in: {moment(enquiry.checkIn).format("MMM Do YY")} </p>
                                <p>Check out: {moment(enquiry.checkOut).format("MMM Do YY")}</p>
                                <Col  className="text-right">
                                    <Buttons href={`mailto:${enquiry.email}
                                        ?subject=Booking confirmation for ${enquiry.name}
                                        &body=Hi, ${enquiry.name}! %0A%0A Thank you for your booking. %0A%0A We're looking forward to seeing you at ${moment(enquiry.checkIn).format("MMM Do YY")}. %0A%0A Best regards, %0A%0A Holidaze %0A%0A`}>
                                        <RiSendPlaneFill /> Confirmation
                                    </Buttons>
                                    <DeleteEnquiry id={enquiry.id} />
                                </Col>
                            </EnquiryCol>
                        );
                    })}           
                </Row>
            </StyledContainer>
        </>
    )
}

export default BokoingEnquiries;
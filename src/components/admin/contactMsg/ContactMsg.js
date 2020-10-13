import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BASE_URL, headers, GET } from '../../../constants/api';
import { Col, Row } from 'react-bootstrap';
import StyledContainer from '../../visitor/layout/containerStyle/StyledContainer';
import AdminMenu from '../AdminMenu';
import Heading1 from '../../visitor/layout/headings/Heading1';
import Heading2 from '../../visitor/layout/headings/Heading2';
import StyledSpinner from '../../visitor/layout/spinner/Spinner';
import DeleteMsg from './DeleteMsg';
import Buttons from '../../visitor/layout/buttons/Buttons';
import styled from 'styled-components';

const MsgCol = styled(Col)`
    border-right: 1px solid #EB8F2D;
    margin: 10px 0;

    @media (max-width: 576px) {
        border-bottom: 1px solid #EB8F2D;
        border-right: none;
    }
`

function ContactMsg() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const { handleSubmit } = useForm();
    
    const history = useHistory();

    const options = { headers };
    const contactURL = BASE_URL + 'contacts';

    useEffect(() => {
        fetch(contactURL, options)
        .then((response) => response.json())
        .then((json) => setMessages(json))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    async function onSubmit(data) {
        console.log(data)

        const updateOptions = {headers, method: GET, body: JSON.stringify(data)};

        await fetch(contactURL, updateOptions);

        history.push("/admin/contactMsg/messages")
    }

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return(
        <>
            <StyledContainer>
                <StyledSpinner />
                <Heading1 title="Contact messages" />
                <AdminMenu />
                <Row onSubmit={handleSubmit(onSubmit)}>
                    {messages.map((message) => {
                        return (
                            <MsgCol sm={6} md={4} key={message.id} >
                                <Heading2 title={message.name} />
                                <p>Email address: {message.email}</p>
                                <p>Message: {message.message}</p>
                                <p>Recieved: {message.createdAt}</p>
                                <Col className="text-right">
                                    <Buttons href={`mailto:${message.email}?subject=Contact form response to - ${message.name}
                                    &body=Hi, ${message.name}! `}>Reply</Buttons>
                                    <DeleteMsg id={message.id} />
                                </Col>
                            </MsgCol>
                        );
                    })}
                </Row>       
            </StyledContainer>
        </>
    )
}

export default ContactMsg;
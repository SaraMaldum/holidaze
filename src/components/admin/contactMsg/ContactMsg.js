import React, {useState, useEffect} from 'react';
import Heading1 from '../../visitor/layout/headings/Heading1';
import {Container, Col, Row } from 'react-bootstrap';
import AdminMenu from '../AdminMenu';
import { useHistory } from 'react-router-dom';
import {BASE_URL, headers, GET} from '../../../constants/api';
import { useForm } from "react-hook-form";
import Heading2 from '../../visitor/layout/headings/Heading2';
import styled from 'styled-components';
import StyledSpinner from '../../visitor/layout/spinner/Spinner';

const MsgCol = styled(Col)`
    border-right: 1px solid #EB8F2D;
    margin: 10px 0;
`

function ContactMsg() {
    const { handleSubmit } = useForm();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    
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

        history.push("/admin/contactMsg/contactMsg")
    }

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return(
        <>
            <Container>
                <Heading1 title="Contact messages" />
                <AdminMenu />
                <StyledSpinner />
                <Row onSubmit={handleSubmit(onSubmit)}>
                    {messages.map((message) => {
                        return (
                            <MsgCol sm={6} md={4} key={message.id} >
                                <Heading2 title={message.name} />
                                <p>Email address: {message.email}</p>
                                <p>Message: {message.message}</p>
                                <p>Recieved: {message.createdAt}</p>
                            </MsgCol>
                        );
                    })}
                </Row>       
            </Container>
        </>
    )
}

export default ContactMsg;
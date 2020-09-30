import React from 'react';
import Heading1 from '../../visitor/layout/headings/Heading1';
import {Container, Col } from 'react-bootstrap';
import AdminMenu from '../AdminMenu';

function ContactMsg() {
    return(
        <>
            <Container>
                <Heading1 title="Contact messages" />
                <AdminMenu />
                <Col md={3}>
                    
                </Col>
            </Container>
        </>
    )
}

export default ContactMsg;
import React from 'react';
import Heading1 from '../visitor/layout/headings/Heading1';
import AdminMenu from './AdminMenu';
import Container from 'react-bootstrap/Container';

function AdminDashboard(){
    return(
        <>
            <Container>
                <Heading1 title="Admin" />
                <AdminMenu />
                <p className="text-center">On this side of Holidaze, you're able to add, edit, delete and get an overview of messages and enquiries made to us.</p>
            </Container>
        </>
    )
}

export default AdminDashboard;
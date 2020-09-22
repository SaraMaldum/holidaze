import React from 'react';
import Heading1 from '../visitor/layout/headings/Heading1';
import AdminMenu from './AdminMenu';



function AdminDashboard(){
    return(
        <>
            <Heading1 title="Admin" />
            <AdminMenu />
        </>
    )
}

export default AdminDashboard;
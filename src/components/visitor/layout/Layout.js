import React from 'react';
import { BrowserRouter as Router, 
    Switch, 
    Route, 
    Redirect } 
from "react-router-dom";
import { AuthContextProvider } from "../../../context/AutContext";
import ProtectedRoute from "../../routes/ProtectedRoute";
import Home from '../home/Home';
import Contact from '../contact/Contact';
import Accommodations from '../accommodations/Accommodations';
import Detail from '../accommodations/detail/Detail';
import Messages from '../../admin/messages/Messages';
import AddAccommodation from '../../admin/edit/AddAccommodation';
import AdminDashboard from '../../admin/AdminDashboard';
import EditAccommodation from '../../admin/edit/EditAccommodation';
import BookingEnquiries from '../../admin/enquiries/BookingEnquiries';
import Enquiry from '../enquiry/Enquiry';
import AccommodationOverview from '../../admin/AccommodationOverview';
import Navbar from './navbar/Navbar';
import Login from '../../auth/Login';
import Register from '../../auth/Register';

function Layout() {
    return(
        <AuthContextProvider>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/accommodations" component={Accommodations} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/booking/:id" component={Enquiry} />

                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <ProtectedRoute path="/admin" exact component={AdminDashboard} />
                    <ProtectedRoute path="/admin/overview" exact component={AccommodationOverview} />
                    <ProtectedRoute path="/admin/messages" exact component={Messages} />
                    <ProtectedRoute path="/admin/enquiries/:id" exact component={BookingEnquiries} />
                    <ProtectedRoute path="/admin/enquiries" exact component={BookingEnquiries} />
                    <ProtectedRoute path="/admin/add" exact component={AddAccommodation} />
                    <ProtectedRoute path="/admin/edit/:id" exact component={EditAccommodation} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </AuthContextProvider>
    )
}

export default Layout; 
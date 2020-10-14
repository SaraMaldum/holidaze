import React from 'react';
import { 
    BrowserRouter as Router, 
    Switch, 
    Route 
} from 'react-router-dom'; 
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

function Layout() {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/accommodations" component={Accommodations} />
                <Route path="/contact" component={Contact} />
                <Route path="/booking/:id" component={Enquiry} />

                <Route path="/admin" component={AdminDashboard} />
                <Route path="/overview" component={AccommodationOverview} />
                <Route path="/add" component={AddAccommodation} />
                <Route path="/messages" component={Messages} />
                <Route path="/enquiries/:id" component={BookingEnquiries} />
                <Route path="/enquiries" component={BookingEnquiries} />                
                <Route path="/edit/:id" component={EditAccommodation} />
            </Switch>
        </Router>
    )
}

export default Layout; 
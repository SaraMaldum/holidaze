import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import { Container } from 'react-bootstrap';

const location = useLocation();
console.log(location.pathname);

const HeaderContainer = styled(Container)`
    background-repeat: none;
    background-position: center;
    background-size: cover; 
    background-image: url(${switchProp("path", {
        "/home": "headerImg.jpg",
        "/accommodations": "norway-2144781_1920.jpg",
        "/detail": "norway-2144781_1920.jpg",
        "/contact": "kuno-schweizer-2H0FmDFWL-w-unsplash.jpg", 
        "/enquiry": "kuno-schweizer-2H0FmDFWL-w-unsplash.jpg",
    })});
`;


export default HeaderContainer;


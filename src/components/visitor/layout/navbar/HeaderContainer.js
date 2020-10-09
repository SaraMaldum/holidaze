import React from "react";
import { useLocation } from 'react-router-dom';
import { switchProp } from 'styled-tools';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    background-image: url(/images/${switchProp("path",{
        "/": "headerImg.jpg",
        "/accommodations": "norway-2144781_1920.jpg",
        "/detail": "norway-2144781_1920.jpg",
        "/contact": "kuno-schweizer-2H0FmDFWL-w-unsplash.jpg",
        "/enquiry": "kuno-schweizer-2H0FmDFWL-w-unsplash.jpg",
    },
        "headerImg.jpg"
    )});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 50vh;
    font-family: "Fira Sans", sans-serif;
    
`;

function HeaderContainer({children}) {
    const location = useLocation();
    const path = location.pathname;

    console.log(path);

return <StyledContainer fluid path={path}>{children}</StyledContainer>;
}

export default HeaderContainer;
import React from "react";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { switchProp } from 'styled-tools';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    background-image: url(/images/${switchProp("path",{
        "/": "headerImg.jpg",
        "/accommodations": "tomas-eidsvold-g_ykfRZUDkk-unsplash.jpg",
        "/contact": "pexels-tobias-bjørkli-4654559.jpg",
        "/admin": "cliff-731840_1920.jpg",
        "/add": "norway-2144782_1280.jpg",
        "/messages": "pexels-tobias-bjørkli-4654559.jpg",
    },
        "headerDark.jpg"
    )});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: ${switchProp("path", {
        "/": "50vh",
    }, "40vh"
    )};
    font-family: "Fira Sans", sans-serif;
    box-shadow: 4px 4px 8px gray;
`;

function HeaderContainer({children}) {
    const location = useLocation();
    const path = location.pathname;

    return <StyledContainer fluid path={path}>{children}</StyledContainer>;
}

HeaderContainer.propTypes = {
    children: PropTypes.object.isRequired
};

export default HeaderContainer;
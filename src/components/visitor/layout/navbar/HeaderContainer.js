import React from "react";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import StyledContainer from './StyledContainer';

function HeaderContainer({children}) {
    const location = useLocation();
    const path = location.pathname;

    return <StyledContainer fluid path={path}>{children}</StyledContainer>;
}

HeaderContainer.propTypes = {
    children: PropTypes.object.isRequired
};

export default HeaderContainer;
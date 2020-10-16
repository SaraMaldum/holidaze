import React from "react";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import StyledHeaderContainer from './StyledHeaderContainer';

function HeaderContainer({children}) {
    const location = useLocation();
    const path = location.pathname;

    return <StyledHeaderContainer fluid path={path}>{children}</StyledHeaderContainer>;
}

HeaderContainer.propTypes = {
    children: PropTypes.object.isRequired
};

export default HeaderContainer;
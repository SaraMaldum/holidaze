import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledError = styled.div`
    color: ${({theme}) => theme.colors.error};
`;

function ErrorMsg( { children } ) {
    return (
        <StyledError>{children}</StyledError>
    );
}

ErrorMsg.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorMsg;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import {FaStar, FaRegStar} from 'react-icons/fa';

const StyledCol = styled(Col)`
    margin-bottom: 20px;
`

const ImageContainer = styled.p`
    height: 200px;
    margin: 0;
    filter: drop-shadow(2px 2px 2px gray);
` 

const StyledLink = styled(NavLink) `
    color: ${({theme}) => theme.colors.mainBlue};
    font-weight: bold;

    &:hover {
    color: ${({theme}) => theme.colors.orange};
        text-decoration: none;
        transition: .3s;
    }
` 
const StyledFilledStar = styled(FaStar)`
    color: ${({theme}) => theme.colors.starYellow};
    font-size: 24px;
`

const StyledStar = styled(FaRegStar)`
    color: ${({theme}) => theme.colors.starYellow};
    font-size: 24px;
` 

function AccommodationItems({id, name, image}) {
    return(
        <StyledCol className="text-center" key={id} >
            <ImageContainer style={{backgroundImage: `url(${image})` , backgroundPosition: 'center', backgroundSize: 'cover'}}></ImageContainer>
            <StyledLink to={'accommodations/' + id}>{name}</StyledLink>
            <div>
                <StyledFilledStar /><StyledFilledStar /><StyledFilledStar /><StyledFilledStar /><StyledStar />
            </div>
        </StyledCol>
    )

}

AccommodationItems.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default AccommodationItems;
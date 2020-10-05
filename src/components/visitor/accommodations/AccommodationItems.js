import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Heading3 from '../layout/headings/Heading3';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const StyledCard = styled (Card)`
    filter: drop-shadow(2px 2px 2px gray);
    margin: 10px 0;

    &:hover {
        filter: drop-shadow(2px 2px 2px #EB8F2D);
        transition: .3s;
    }
`

const StyledCol = styled(NavLink)`
    &:hover {
        text-decoration: none;
        transition: .3s;
    }
`

const ImageContainer = styled.p`
    height: 200px;
    width: 100%;
    filter: drop-shadow(1px 1px 1px gray);
` 

const StyledFilledStar = styled(FaStar)`
    color: ${({theme}) => theme.colors.starYellow};
    font-size: 24px;
    margin-bottom: 15px;
    filter: drop-shadow(1px 1px 1px gray);
`

const StyledStar = styled(FaRegStar)`
    color: ${({theme}) => theme.colors.starYellow};
    font-size: 24px;
    margin-bottom: 15px;
    filter: drop-shadow(1px 1px 1px gray);
` 

function AccommodationItems({id, name, image}) {
    return(
        <StyledCard>
            <StyledCol className="text-center" key={id}  to={"/detail/" + id}>
                <ImageContainer style={{backgroundImage: `url(${image})` , backgroundPosition: 'center center', backgroundSize: 'cover'}}></ImageContainer>
                <Heading3 title={name}/>
                <div>
                    <StyledFilledStar /><StyledFilledStar /><StyledFilledStar /><StyledFilledStar /><StyledStar />
                </div>
            </StyledCol>
        </StyledCard>
    )
}

AccommodationItems.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default AccommodationItems;
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading3 from '../layout/headings/Heading3';
import {FaStar, FaRegStar} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

const StyledCol = styled(NavLink)`
    margin: 20px 0;
    
    &:hover {
        filter: drop-shadow(2px 2px 2px gray);
        text-decoration: none;
        transition: .3s;
    }
`

const ImageContainer = styled.p`
    height: 200px;
    margin: 0;
    filter: drop-shadow(2px 2px 2px gray);
` 

const StyledFilledStar = styled(FaStar)`
    color: ${({theme}) => theme.colors.starYellow};
    font-size: 24px;
    margin-bottom: 15px;
`

const StyledStar = styled(FaRegStar)`
    color: ${({theme}) => theme.colors.starYellow};
    font-size: 24px;
    margin-bottom: 15px;
` 

function AccommodationItems({id, name, image}) {
    return(
        <StyledCol className="text-center" key={id}  to={"/detail/" + id}>
            <ImageContainer style={{backgroundImage: `url(${image})` , backgroundPosition: 'center', backgroundSize: 'cover'}}></ImageContainer>
            <Heading3 title={name}/>
            <div>
                <StyledFilledStar /><StyledFilledStar /><StyledFilledStar /><StyledFilledStar /><StyledStar />
            </div>
        </StyledCol>
    )

}

AccommodationItems.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default AccommodationItems;
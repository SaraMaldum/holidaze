import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Searchbar from '../layout/searchbar/Searchbar'
import {FaStar, FaRegStar} from 'react-icons/fa';
import StyledSpinner from '../layout/spinner/Spinner';

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

function Accommodations() {
    const [accommodations, setAccommodations] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = BASE_URL + "establishments";

    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setAccommodations(json)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    },[options, url]);


    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return (
        <>
        <Container>
            <h1>Accommodations</h1>
            <Searchbar />
            <Row>
                {accommodations.map(accommodation => {
                    return (
                        <StyledCol md={4} key={accommodation.id} >
                            <ImageContainer style={{backgroundImage: `url(${accommodation.image})` , backgroundPosition: 'center', backgroundSize: 'cover'}}></ImageContainer>
                            <StyledLink to={`/admin/accommodation/edit/${accommodation.id}`}>{accommodation.name}</StyledLink>
                            <div>
                            <StyledFilledStar /><StyledFilledStar /><StyledFilledStar /><StyledFilledStar /><StyledStar />
                            </div>
                        </StyledCol>
                    );
                })}
            </Row>
            </Container>
        </>
    );
}

export default Accommodations;
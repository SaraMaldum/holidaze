import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../../constants/api";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import {FaStar, FaRegStar} from 'react-icons/fa';
import StyledSpinner from '../layout/spinner/Spinner';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    const [filterAccommodations, setFilterAccommodations] = useState([]);
    const [loading, setLoading] = useState(true);

    const establishmentURL = BASE_URL + "establishments";

    const options = { headers };

    useEffect(() => {
        fetch(establishmentURL, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setAccommodations(json)
                setFilterAccommodations(json)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    },[options, establishmentURL]);

    
    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }

    return (
        <>
        <Container>
            <Heading1 title="Accommodations"/>
            <Heading2 title="Find your accommodations"/>
            <Autocomplete 
                id="searchbar"
                getOptionLabel={(options) => options.name}
                options={filterAccommodations}
                renderInput={(params) => <TextField {...params} label="Search here.." variant="outlined" />}
                handleSearch={establishmentURL}
                onChange={filterAccommodations}
                />
            <Row>
                {filterAccommodations.map(accommodation => {
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
import React, { useState, useEffect } from 'react';
import { BASE_URL, headers } from "../../../constants/api";
import { Row, Col } from 'react-bootstrap';
import StyledSpinner from '../layout/spinner/Spinner';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import AccommodationItems from './AccommodationItems';
import StyledContainer from '../layout/containerStyle/StyledContainer';
import Search from './search/Search';

function Accommodations() {
    const [accommodations, setAccommodations] = useState([]);
    const [filteredAccommodation, setFilteredAccommodation] = useState([]);
    const [loading, setLoading] = useState(true);

    const establishmentURL = BASE_URL + 'establishments';

    const options = { headers };

    useEffect(() => {
        fetch(establishmentURL, options)
            .then((response) => response.json())
            .then((json) => {
                setAccommodations(json)
                setFilteredAccommodation(json);

            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    //Search field
    const filterAccommodation = function (e) {
        const searchValue = e.target.value.toLowerCase();

        const filteredArray = accommodations.filter(function (specificAccommodation) {
            const lowerCaseName = specificAccommodation.name.toLowerCase();

            if (lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
    });
    setFilteredAccommodation(filteredArray);
    }
    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }
    
    return (
        <>
            <StyledContainer>
                <StyledSpinner />
                <Heading1 title="Accommodations"/>
                <Heading2 title="Find your accommodation"/>
                <Search handleSearch={filterAccommodation}/>
                {filteredAccommodation.length === 0 && <p>No results</p>}
                <Row>
                    {filteredAccommodation.map(accommodation => {
                        const {id, name, image} = accommodation;
                        return (
                            <Col sm={6} md={4} lg={3} key={id}>
                                <AccommodationItems 
                                    id={id}
                                    name={name}
                                    image={image}                                   
                                />   
                            </Col>
                        );
                    })}
                </Row>
            </StyledContainer>
        </>
    );
}

export default Accommodations;
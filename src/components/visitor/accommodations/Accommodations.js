import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import StyledSpinner from '../layout/spinner/Spinner';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import AccommodationItems from './AccommodationItems';
import Autocomplete from 'react-autocomplete';


function Accommodations() {
    const [accommodations, setAccommodations] = useState([]);
    const [loading, setLoading] = useState(true);

    const establishmentURL = BASE_URL + 'establishments';

    const options = { headers };

    useEffect(() => {
        fetch(establishmentURL, options)
            .then((response) => response.json())
            .then((json) => {
                setAccommodations(json)
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
                <Heading2 title="Find your accommodation"/>
                <Autocomplete
                    items={accommodations}
                    shouldItemRender={(accommodations, value) => 
                        accommodations.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={(accommodations) => 
                        accommodations.name }
                    inputProps={{ style: { width: '100%', marginBottom: '20px', padding: '5px', border: '2px solid #EB8F2D', borderRadius: '5px', display: 'inline-block' }, placeholder: 'Search...'}}  
                    wrapperStyle={{ width: '100%' }}
                    renderItem={(accommodations) =>
                        <Col md={12} key={accommodations.id}
                        style={{ padding: '5px' }}>
                          {accommodations.name}
                        </Col>
                      }
                      value={accommodations.name}
                      onChange={(e) => accommodations.name = e.target.value}
                      onSelect={(id) => accommodations.name = id}
                />
                <Row>
                    {accommodations.map(accommodation => {
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
            </Container>
        </>
    );
}

export default Accommodations;
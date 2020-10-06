import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../constants/api";
import { Container, Row, Col } from 'react-bootstrap';
import Autocomplete from 'react-autocomplete';
import StyledSpinner from '../layout/spinner/Spinner';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import AccommodationItems from './AccommodationItems';

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if (loading) {
        return <StyledSpinner animation="border" size="md" />;
    }
    
    return (
        <>
            <Container>
                <StyledSpinner />
                <Heading1 title="Accommodations"/>
                <Heading2 title="Find your accommodation"/>
                <Autocomplete
                    getItemValue={(accommodations) => 
                    accommodations.name }
                    items={accommodations}
                    shouldItemRender={(accommodations, value) => accommodations.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
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
                      onSelect={(id) => accommodations.id = id}
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
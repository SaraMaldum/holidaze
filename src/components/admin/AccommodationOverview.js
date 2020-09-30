import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import Heading2 from '../visitor/layout/headings/Heading2';
import { Col, Row } from "react-bootstrap";

function Accommodations() {
    const [accommodations, setAccommodations] = useState([]);
    const [error, setError] = useState(null);

    const overviewURL = BASE_URL + "establishments";

    const options = { headers };

    useEffect(() => {
        fetch(overviewURL, options)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                if (json.error) {
                    setAccommodations([]);
                    setError(json.message);
                } else {
                    setAccommodations(json);
                }
            })
            .catch((error) => console.log(error));
    }, [options, overviewURL]);

    return (
        <>
            <Heading2 title="Click to edit"/>
            {error && <div className="error">{error}</div>}
            <Row>
                {accommodations.map((accommodation) => {
                    return (
                        <Col md={3} key={accommodation.id}>
                            <NavLink to={`/edit/${accommodation.id}`}>{accommodation.name}</NavLink>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default Accommodations;
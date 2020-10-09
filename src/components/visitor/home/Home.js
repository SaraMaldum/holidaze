import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Heading1 from '../layout/headings/Heading1';
import Heading2 from '../layout/headings/Heading2';
import Buttons from '../layout/buttons/Buttons';
import StyledContainer from '../layout/containerStyle/StyledContainer';
import TheCity from '../../../images/matt-lamers-PHEklbSsCxE-unsplash.jpg';
import Fløyen from '../../../images/leonard-rb-NuAtjag7oJ4-unsplash.jpg';
import Bryggen from '../../../images/kaitlyn-collins-vG0SDJrrOIA-unsplash.jpg';
import Hiking from '../../../images/michael-fousert-7uJk9VBl94g-unsplash.jpg';
import Typeahead from './typeahead/Typeahead';
import styled from 'styled-components';

const StyledImg = styled.div`
    margin: 10px 0;
    height: 350px;
    width: 100%;
    filter: drop-shadow(2px 2px 2px gray);
` 

const HomeBtn = styled(Buttons)`
    position: absolute;
    top: 44%;
    left: 32%;
    margin: 0;
` 

function Home() {
    return( 
        <>
            <StyledContainer>
                <Heading1 title="Welcome to Holidaze"/>
                <Heading2 title="Find an accommodation" />
                <Typeahead />
                <Row>
                    <Col lg={3} md={4} sm={6}>
                        <StyledImg style={{backgroundImage: `url(${TheCity})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                            <HomeBtn href="https://www.visitbergen.com/" target="_blank">The City</HomeBtn>
                        </StyledImg>
                    </Col>

                    <Col lg={3} md={4} sm={6}>
                        <StyledImg style={{backgroundImage: `url(${Fløyen})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                            <HomeBtn href="https://www.floyen.no/" target="_blank">Fløyen</HomeBtn>
                        </StyledImg>
                    </Col>
                    
                    <Col lg={3} md={4} sm={6}>
                        <StyledImg style={{backgroundImage: `url(${Bryggen})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                            <HomeBtn href="https://www.visitbergen.com/ting-a-gjore/bryggen-i-bergen-p878553" target="_blank">Bryggen</HomeBtn>
                        </StyledImg>
                    </Col>

                    <Col lg={3} md={4} sm={6}>
                        <StyledImg style={{backgroundImage: `url(${Hiking})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                            <HomeBtn href="https://en.visitbergen.com/things-to-do/activities/hiking-in-bergen/seven-mountains-bergen?gclid=CjwKCAjw74b7BRA_EiwAF8yHFKA9ZSlqUVvcrFdYR-AJFBXaafyIdl54-YzexxY5E6RDI0q8C-2SMhoCeYAQAvD_BwE" target="_blank">Hiking</HomeBtn>
                        </StyledImg>
                    </Col>
                </Row>
            </StyledContainer>
        </>
    )
}

export default Home; 
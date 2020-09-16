import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Searchbar from '../layout/searchbar/Searchbar';
import Buttons from '../layout/buttons/Buttons';
import TheCity from '../../../images/matt-lamers-PHEklbSsCxE-unsplash.jpg';
import Fløyen from '../../../images/leonard-rb-NuAtjag7oJ4-unsplash.jpg';
import Bryggen from '../../../images/kaitlyn-collins-vG0SDJrrOIA-unsplash.jpg';
import Hiking from '../../../images/michael-fousert-7uJk9VBl94g-unsplash.jpg';
import styled from 'styled-components';
import Heading1 from '../layout/headings/Heading1';

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
            <Container>
            <Heading1 title="Welcome to Holidaze"/>
            <Searchbar />

            <Row>
                <Col lg={3} md={4} sm={6}>
                    <StyledImg style={{backgroundImage: `url(${TheCity})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <HomeBtn>The City</HomeBtn>
                    </StyledImg>
                </Col>

                <Col lg={3} md={4} sm={6}>
                    <StyledImg style={{backgroundImage: `url(${Fløyen})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <HomeBtn>Fløyen</HomeBtn>
                    </StyledImg>
                </Col>
                
                <Col lg={3} md={4} sm={6}>
                    <StyledImg style={{backgroundImage: `url(${Bryggen})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <HomeBtn>Bryggen</HomeBtn>
                    </StyledImg>
                </Col>

                <Col lg={3} md={4} sm={6}>
                    <StyledImg style={{backgroundImage: `url(${Hiking})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <HomeBtn>Hiking</HomeBtn>
                    </StyledImg>
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default Home; 
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Searchbar from '../layout/searchbar/Searchbar';
import Buttons from '../layout/buttons/Buttons';
import TheCity from '../../images/matt-lamers-PHEklbSsCxE-unsplash.jpg';
import Fløyen from '../../images/leonard-rb-NuAtjag7oJ4-unsplash.jpg';
import Bryggen from '../../images/kaitlyn-collins-vG0SDJrrOIA-unsplash.jpg';
import Hiking from '../../images/michael-fousert-7uJk9VBl94g-unsplash.jpg';
import styled from 'styled-components';

const StyledCol = styled(Col)`
    margin: 10px;
    height: 300px;
    filter: drop-shadow(2px 2px 2px gray);
` 
function Home() {
    return( 
        <>
            <Container>
            <h1>Welcome to Holidaze</h1>
            <Searchbar />

            <Row>
                <StyledCol md={3} 
                style={{backgroundImage: `url(${TheCity})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <Buttons>The City</Buttons>
                </StyledCol>

                <StyledCol md={3} style={{backgroundImage: `url(${Fløyen})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <Buttons>Fløyen</Buttons>
                </StyledCol>

                <StyledCol md={3} 
                style={{backgroundImage: `url(${Bryggen})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <Buttons>Bryggen</Buttons>
                </StyledCol>

                <StyledCol md={3} 
                style={{backgroundImage: `url(${Hiking})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <Buttons>Hiking</Buttons>
                </StyledCol>
            </Row>
            </Container>
        </>
    )
}

export default Home; 
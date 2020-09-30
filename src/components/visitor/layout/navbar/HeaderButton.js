import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Buttons from '../buttons/Buttons';

const BtnContainer = styled(Container)`
    margin-top: -82px;
    padding: 4px;
    max-width: 350px;
    background-color: rgba(255,255,255,.6);
` 

const HeadingTxt = styled.p`
    font-size: 24px;
    color: ${({theme}) => theme.colors.darkBlue};
    font-weight: bold;
    text-transform: uppercase;
` 

const HeaderBtn = styled(Buttons)`
    margin: -30px 0;
` 

function HomeHeaderBtn() {
    return(
        <>
            <BtnContainer className="text-center">
                <HeadingTxt>Explore Bergen today!</HeadingTxt>
                <HeaderBtn href="Accommodations">View Accommodations</HeaderBtn>
            </BtnContainer>
        </>
    )
}

export default HomeHeaderBtn;

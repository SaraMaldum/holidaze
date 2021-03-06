import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Buttons from '../layout/buttons/Buttons';

const BtnContainer = styled(Container)`
    margin-top: -84px;
    padding: 4px;
    max-width: 350px;
    background-color: rgba(255,255,255,.6);
    font-family: 'Fira Sans', sans-serif;
`;

const HeadingTxt = styled.p`
    font-size: 24px;
    color: ${({theme}) => theme.colors.darkBlue};
    font-weight: bold;
    text-transform: uppercase;
`;

const HeaderBtn = styled(Buttons)`
    margin: -30px 0;
    box-shadow: 4px 4px 8px gray;
`; 

function HomeHeaderBtn() {
    return(
        <>
            <BtnContainer className="text-center">
                <HeadingTxt>Explore Bergen today!</HeadingTxt>
                <HeaderBtn href="/accommodations">View Accommodations</HeaderBtn>
            </BtnContainer>
        </>
    )
}

export default HomeHeaderBtn;

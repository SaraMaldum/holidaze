import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import { Container } from 'react-bootstrap';

const StyledContainer = styled(Container)`
    background-image: url(/images/${switchProp("path",{
        "/": "headerImg.jpg",
        "/accommodations": "tomas-eidsvold-g_ykfRZUDkk-unsplash.jpg",
        "/contact": "pexels-tobias-bjørkli-4654559.jpg",
        "/register": "cliff-731840_1920.jpg",
        "/admin": "cliff-731840_1920.jpg",
        "/add": "norway-2144782_1280.jpg",
        "/messages": "pexels-tobias-bjørkli-4654559.jpg",
    },
        "headerDark.jpg"
    )});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: ${switchProp("path", {
        "/": "50vh",
    }, 
    "40vh"
    )};
    font-family: "Fira Sans", sans-serif;
    box-shadow: 4px 4px 8px gray;

    @media (max-width: 768px) {
        height: ${switchProp("path", {
            "/": "50vh",
        }, 
        "30vh"
        )};
    }
`;

export default StyledContainer;
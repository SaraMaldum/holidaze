import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import { Container } from 'react-bootstrap';

const StyledContainer = styled(Container)`
    background-image: url(/images/${switchProp("path",{
        "/": "headerImg1.jpg",
        "/accommodations": "tomas-eidsvold-g_ykfRZUDkk-unsplash1.jpg",
        "/contact": "pexels-tobias-bjørkli-46545591.jpg",
        "/register": "ansgar-scheffold-IZZ78Ugqsow-unsplash.jpg",
        "/admin": "ansgar-scheffold-IZZ78Ugqsow-unsplash.jpg",
        "/admin/add": "norway-2144782_1280.jpg",
        "/admin/messages": "pexels-tobias-bjørkli-46545591.jpg",
    },
        "headerDark1.jpg"
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
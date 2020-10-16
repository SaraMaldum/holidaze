import styled from 'styled-components';
import { switchProp } from 'styled-tools';
import { Container } from 'react-bootstrap';

const StyledHeaderContainer = styled(Container)`
    background-image: url(/images/${switchProp("path",{
        "/": "headerImg.jpg",
        "/accommodations": "accomHeader.jpg",
        "/contact": "contactHeader.jpg",
        "/register": "adminHeader.jpg",
        "/admin": "adminHeader.jpg",
        "/admin/add": "addHeader.jpg",
        "/admin/messages": "contactHeader.jpg",
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

export default StyledHeaderContainer;
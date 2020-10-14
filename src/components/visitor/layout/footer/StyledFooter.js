import styled from 'styled-components';

const StyledFooter = styled.footer `
    text-align: center;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    color: ${({ theme }) => theme.colors.white};
    padding-top: 10px;

    .followTxt {
        font-weight: bold;
        margin: 0 auto;
    }

    .someIcon {
        margin: 10px; 
        font-size: 26px;

        &:hover {
            color: ${({theme}) => theme.colors.orange};
            cursor: pointer;
            transition: .3s;
        }
    }
`;

export default StyledFooter;

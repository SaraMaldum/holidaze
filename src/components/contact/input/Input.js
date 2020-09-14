import styled from 'styled-components';

const Input = styled.input`
    border: 2px solid #00749E;
    color: ${({theme}) => theme.colors.mainBlue};    
    display: block;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;

    &:focus {
        background-color: #fff;
        border-color: ${({theme}) => theme.colors.orange};
        outline: 0;
        transition: .3s;
    }
`;

export default Input;
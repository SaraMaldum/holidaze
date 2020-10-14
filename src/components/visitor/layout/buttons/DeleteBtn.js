import styled from 'styled-components';
import Buttons from './Buttons';

const DeleteBtn = styled(Buttons)`
    background-color: ${({theme}) => theme.colors.delete};
    border: 2px solid #F03B2D;
    margin-left: 10px;

    &:hover {
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.delete};
        border: 2px solid #F03B2D;
    }
` 

export default DeleteBtn;
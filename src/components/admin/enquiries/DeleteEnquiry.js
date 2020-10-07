import React from 'react';
import { useHistory } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { AiFillDelete } from 'react-icons/ai'
import { BASE_URL, headers, DELETE } from '../../../constants/api';
import Buttons from '../../visitor/layout/buttons/Buttons';
import styled from 'styled-components';

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

function DeleteButton(props){
    const history = useHistory();

    function checkDelete() {
        confirmAlert({
            title: 'Confirm delete', 
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => deleteEnquiry(),
                },
                {
                    label: 'No'
                }
            ]
        });
    }
    console.log(props)
    
    async function deleteEnquiry() {
        const deleteURL = BASE_URL + 'enquiries/' + props.id;

        const options = { headers, method: DELETE };

        await fetch(deleteURL, options);

        history.push("/admin/enquiries/enquiries");
    }

    return(
        <DeleteBtn onClick={checkDelete}>
            <AiFillDelete /> Delete
        </DeleteBtn>
    )
}

export default DeleteButton;
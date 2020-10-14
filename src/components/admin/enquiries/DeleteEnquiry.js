import React from 'react';
import { useHistory } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { AiFillDelete } from 'react-icons/ai'
import { BASE_URL, headers, DELETE } from '../../../constants/api';
import DeleteBtn from '../../visitor/layout/buttons/DeleteBtn';

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

        history.push("/admin/enquiries");
    }

    return(
        <DeleteBtn onClick={checkDelete}>
            <AiFillDelete /> Delete
        </DeleteBtn>
    )
}

export default DeleteButton;
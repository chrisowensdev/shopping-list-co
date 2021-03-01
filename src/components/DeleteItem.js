import React from 'react';
import styled from 'styled-components';

import { socket } from '../layout/Header';

import DeleteIcon from '@material-ui/icons/Delete';

const DeleteItem = ({item}) => {

    const handleClick = () => {
        socket.emit('delete', item._id)
    }

    return (
        <>
        {item.isChecked ? (
            <DeleteButton onClick={handleClick}>
                <DeleteIcon />
            </DeleteButton>) : (
            ""
            )
        }
        </>
    )
}

export default DeleteItem

const DeleteButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: none;
`;

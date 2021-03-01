import React, { useState } from 'react';
import styled from 'styled-components';

import { socket } from '../layout/Header';

import AddCircleIcon from '@material-ui/icons/AddCircle';


const AddItem = ({addItemFunction}) => {
    const [item, setItem] = useState('');
    const [qty, setQty] = useState(1);

    const addItem = (e) => {
        e.preventDefault();

        if(item !== '') {
            let itemToAdd = {
                item,
                qty,
                isChecked: false,
                date: Date.now()
            }
            socket.emit('addItem', itemToAdd);
            addItemFunction();

        } else {
            window.alert('Missing');
        }

        
    }
    return (
        <>
            <Form onSubmit={addItem}>
                <input type="text" placeholder="Enter Item" value={item} onChange={e => setItem(e.target.value)}/>
                <input type="number" value={qty} onChange={e => setQty(e.target.value)}/>
                <button type="submit">Add Item</button>
            </Form>
        </>
    )
}

export default AddItem;

const Form = styled.form`
    width: 90%;
    background: linear-gradient(to bottom, rgba(76, 200, 56, 0.62), rgba(19, 111, 117, 0.73));
    background-size: cover;
    border-radius: 5px;
    margin: 10px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    animation: fadeIn 0.7s;

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    input {
        margin: 10px;
        padding: 10px;
        border: none;
        border-radius: 5px;
    }

    button {
        background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(19, 111, 117, 0.73)),url('athf.jpg') no-repeat center;
        background-size: contain, cover; 
        margin: 10px;
        padding: 10px;
    
        color: #fff;
        border: 1px solid white;
        border-radius: 5px;
        font-weight: bold;

        :active {
            transform: scale(0.95)
        }
    }
`;


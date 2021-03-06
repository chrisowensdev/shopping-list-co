import React, { useState } from 'react';
import styled from 'styled-components';

import { socket } from '../layout/Header';


const AddItem = ({addItemFunction}) => {
    const [item, setItem] = useState('');
    const [qty, setQty] = useState(1);
    const [notes, setNotes] = useState('')

    const addItem = (e) => {
        e.preventDefault();

        if(item !== '') {
            let itemToAdd = {
                item,
                qty,
                isChecked: false,
                date: Date.now(),
                notes
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
                <textarea placeholder="Notes..." onChange={e => setNotes(e.target.value)}></textarea>
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
    margin: 5px auto;
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
        margin: 5px;
        padding: 10px;
        border: none;
        border-radius: 5px;
    }
    textarea {
        resize: none;
        margin: 5px;
        border-radius: 5px;
    }

    button {
        /* background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(19, 111, 117, 0.73)),url('athf.jpg') no-repeat center; */
        background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(19, 111, 117, 0.73)),url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80') center;
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


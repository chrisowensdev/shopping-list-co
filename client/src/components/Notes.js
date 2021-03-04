import React, {useState} from 'react'
import styled from 'styled-components';

import { socket } from '../layout/Header';

const Notes = ({item}) => {
    const [notes, setNotes] = useState(item.notes);
    const [editNotes, setEditNotes] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(notes);

        let newNotes = {
            ...item,
            notes
        }

        socket.emit('editNotes', newNotes);
        setEditNotes(false);
    }

    return (
        <NotesComponent >
            {editNotes ? (
                <form onSubmit={handleSubmit}>
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)}/>
                    <button type="submit">
                        Edit notes
                    </button>
                </form>
            ) :(
                <div onClick={() => setEditNotes(!editNotes)}>
                    <DisplayNotes className="notes">{notes}</DisplayNotes>
                </div>
            )
            }
        </NotesComponent>
        
        
    )
}

export default Notes

const NotesComponent = styled.div`
    display: flex;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: column;

        textarea {
            resize: none;
            border-radius: 5px;
            margin: 10px;

            :focus {
                outline: none;
            }
        }
        button {
            margin: 10px;
            padding: 5px;
            border-radius: 5px;
            background-color: black;
            color: #fff;
            font-family: inherit;
            font-weight: bolder;
        }
    }
`;


const DisplayNotes = styled.div`
    margin: 10px;
    background-color: #fff;
    color: darkgreen;
    padding: 5px;
    text-align: left;
`;

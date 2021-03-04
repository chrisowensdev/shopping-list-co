import React from 'react'
import styled from 'styled-components';

const Notes = ({item}) => {
    return (
        <div>
            <DisplayNotes className="notes">{item.notes}</DisplayNotes>
        </div>
        
    )
}

export default Notes


const DisplayNotes = styled.div`
    margin: 10px;
    background-color: #fff;
    color: darkgreen;
    padding: 5px;
    text-align: left;
`;

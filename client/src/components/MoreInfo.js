import React from 'react';
import styled from 'styled-components';


const formatDate = (itemDate) => {
    let date = new Date(itemDate);
    let formattedDate = date.toLocaleDateString();
    let formattedTime = date.toLocaleTimeString();
    return `${formattedDate} - ${formattedTime}`;
}

const MoreInfo = ({item}) => {
    return (
        <Details>
            Added: {formatDate(item.date)}
        </Details>
    )
}

export default MoreInfo;

const Details = styled.div`
    background-color: darkgreen;
    width: 100%;
    margin: 10px;
    color: #fff;
    padding: 10px;
    border-radius: 5px;

    
`;

import styled from 'styled-components';

import Notes from './Notes';


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
            {
                item.notes ? (
                    <Notes item={item}/>
                ) : null
            }
            
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
    animation: expand .3s ease-in;

    @keyframes expand {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }


    
`;

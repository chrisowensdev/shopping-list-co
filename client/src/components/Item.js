import React from 'react';
import styled from 'styled-components';

import { socket } from '../layout/Header';

import DeleteItem from './DeleteItem';

const Item = ({item}) => {

    const handleClick = () => {
        socket.emit('check', item)
    }

    return (
        <>
            <ListItem key={item._id} checked={item.isChecked} onClick={handleClick}>
                <div className="item-section" >
                <span className="quantity">{item.qty}</span>{item.item}
                </div>
                    
                    <DeleteItem item={item}/>
            </ListItem>
        </>
    )
}

export default Item;

const ListItem = styled.li`
  display: flex;
  width: 90%;
  height: 50px;
  margin: 10px auto;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform .1s ease-in-out;

  :active {
      transform: scale(0.97);
  }

  ${props => props.checked && `
    color: lightgrey;
  `}

  .quantity {
      padding: 10px;
      background-color: green;
      margin-right: 10px;
      color: #fff;

      ${props => props.checked && `
        background-color: lightgrey;
      `}
  }
`;

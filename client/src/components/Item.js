import React, {useState} from 'react';
import styled from 'styled-components';

import { socket } from '../layout/Header';

import DeleteItem from './DeleteItem';
import MoreInfo from './MoreInfo';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({item}) => {
    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        socket.emit('check', item)
    }

    return (
        <>
            <ListItem key={item._id} checked={item.isChecked} expand={expand}>
                {item.notes ? <div className="notes-notification"><PriorityHighIcon className="notify-icon"/></div> : null}
                <div className="item-section" >
                    <div className="item" onClick={handleClick}>
                        <span className="quantity">{item.qty}</span>{item.item}
                    </div>
                    <div>
                        {item.isChecked ? 
                            <DeleteItem item={item}/>
                            :
                            <MoreInfoButton expand={expand} onClick={e => setExpand(!expand)}><ExpandMoreIcon/></MoreInfoButton>
                    }
                         
                         
                    </div>               
                </div>
                        {expand ? (
                            
                        <MoreInfo item={item}/>
                ) : ""
                }

                    
                    
            </ListItem>
        </>
    )
}

export default Item;

const ListItem = styled.li`
display: flex;
    flex-direction:column;
    position: relative;
  width: 90%;
  margin: 10px auto;
  padding: 0 5px;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-out;

  .notes-notification {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      font-size: 2px;
      height: 20px;
      width: 20px;
      color: #fff;
      background-color: red;
      border-radius: 50%;
      right: -5px;
      top: -5px;
      box-shadow: 0 0 10px rgba(255, 0, 0, 0.3);

      .notify-icon {
        font-size: 16px;
      }
  }

  @keyframes notify {
      0% {
          opacity: 0;
          transform: scale(10%);
      }

      50% {
          opacity: 1;
          transform: scale(100%);
      }

      100% {
          opacity: 0;
      }
  }

  .item {
      display: flex;
      align-items: center;
      width: 90%;
      text-align: left;
      height: 45px;
      cursor: pointer;
  }

  ${props => props.checked && `
    color: lightgrey;
  `}



  .item-section{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .quantity {
      display: flex;
      align-items: center;
      height: 35px;
      padding: 10px;
      background-color: green;
      margin-right: 10px;
      color: #fff;

      ${props => props.checked && `
        background-color: lightgrey;
      `}
  }
`;

const MoreInfoButton = styled.button `
    background-color: transparent;
    border: none;
    transform: rotate(0deg);
    transition: transform 0.2s ease-in;

    ${props => props.expand && `
        transform: rotate(180deg);
    `}
`;

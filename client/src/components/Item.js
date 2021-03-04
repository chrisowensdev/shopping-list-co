import React, {useState} from 'react';
import styled from 'styled-components';

import { socket } from '../layout/Header';

import DeleteItem from './DeleteItem';
import MoreInfo from './MoreInfo';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({item}) => {
    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        socket.emit('check', item)
    }

    return (
        <>
            <ListItem key={item._id} checked={item.isChecked} expand={expand}>
                <div className="item-section" >
                    <div className="item" onClick={handleClick}>
                        <span className="quantity">{item.qty}</span>{item.item}
                    </div>
                    <div>
                        {item.isChecked ? 
                            <DeleteItem item={item}/>
                            :
                            <button onClick={e => setExpand(!expand)}><ExpandMoreIcon/></button>
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
  width: 90%;
  margin: 10px auto;
  padding: 0 5px;
  align-items: center;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-out;

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

  ${props => props.expand && `
    max-height: 200px;
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

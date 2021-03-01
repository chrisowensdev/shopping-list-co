import React, { Component } from 'react';
import styled from 'styled-components';

import { socket } from '../layout/Header';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import AddItem from './AddItem';

import Item from './Item';

class List extends Component {
    constructor() {
        super();
        this.state = {
            list_data: [],
            addItem: false
        };
    }

    getData = listItems => {
        listItems = listItems.map(item => {
            return item;
        })
        this.setState({ list_data: listItems })
    };

    changeData = () => socket.emit("initial_data")

    componentDidMount() {
        socket.emit("initial_data");
        socket.on("get_data", this.getData);
        socket.on("change_data", this.changeData);
    }

    componentWillUnmount() {
        socket.off("get_data", this.getData);
        socket.off("change_data");
    }


    getListData() {
        return this.state.list_data.map(item => {
            return (
                <Item key={item._id} item={item} />
            )
        })
    }

    addItem = () => {
        this.setState({
            ...this.state,
            addItem: !this.state.addItem
        })
    }

    render() {
        return (
            <ListStyles>
            {this.state.addItem ? <AddItem addItemFunction={this.addItem}/> : ""}
            <ul>
                {this.getListData()}
                
            </ul>
            <AddItemButton onClick={this.addItem}>
                {this.state.addItem ? <RemoveCircleIcon className="icon"/> :
                <AddCircleIcon className="icon" />
            }
            </AddItemButton>
                
            
            </ListStyles>
        )
    }
}

export default List;

const ListStyles = styled.div`
    max-width: 400px;
    margin: 0 auto;
`;

const AddItemButton = styled.button`
    position: absolute;
    top: 5px;
    right: 20px;
    border: none;
    background-color: transparent;
    padding: 0;
    color: #fff;;

    .icon {
        font-size: 48px;
    }
`;

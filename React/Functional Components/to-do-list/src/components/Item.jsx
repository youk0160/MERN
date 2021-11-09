import React from 'react';

const Item = (props)=>{
    let itemClass="";
    if (props.item.complete) itemClass="text-decoration-line-through";

    return(
        <>
            <li className="list-group-item">
                <input type="checkbox" onChange={(event)=>{props.toggleComplete(props.i)}}/>
                <span className={itemClass}>{props.item.name}</span>
                <button type="submit" onClick={(event)=>{props.deleteItem(props.i)}}>Delete</button>
            </li>
        </>
    )
    
}

export default Item;
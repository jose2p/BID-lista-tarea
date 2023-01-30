import React from 'react'

function TareasItem({item, onComplete, onDelete}) {
    const style = () =>{
        return {
            color: item.completed ? 'grey' : 'black',
            textDecoration: item.completed ? 'line-through' : 'none',
        }
    }
    return (
        <li style={style()}>
            {item.tarea}
            <input type='checkbox' checked = {item.completed} onChange={() => onComplete(item.id)}/>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
    )
}
export default TareasItem;

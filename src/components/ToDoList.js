import React from 'react';
import ToDoItem from './ToDoItem';


export default function ToDoList({ users, del, clearCards}) {
    
    const toDoListStyle = {
        margin: '50px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 400px)',
        gridAutoRows: '500px', 
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div style={toDoListStyle}>
            {users.map(user => <ToDoItem key={user.id} {...user} del={del} clearCards={clearCards} />)}
        </div>
    )
}

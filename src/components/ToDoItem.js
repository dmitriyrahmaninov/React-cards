import React from 'react'

export default function ToDoItem({id, avatar, first_name, last_name, status, del, clearCards}) {
    
    const firstNameDoubleClick = status ? first_name : "******";
    const lastNameDoubleClick = status ? last_name : "******";
    const avatarDoubleClick = status ? avatar : "https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar.png";

    const cardsStyle = {
        width: '300px',
        height: '400px',
        border: '2px solid black',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: status ? 'white' : '#bdc3c7'
    }

    const avatarStyle = {
        height: '250px',
        width: '250px',
        obejectFit: 'cover',
        borderRadius: '10px'
    }

    const nameStyle = {
        fontSize: '30px'
    }
    
    const btnStyle = {
        width: '250px',
        height: '40px',
        fontSize: '25px',
        backgroundColor: '#ff4757',
        border: '2px solid black',
        borderRadius: '20px',
        cursor: 'pointer'
    }

    return (
        <div style={cardsStyle} onDoubleClick={() => clearCards(id)}>

            <img style={avatarStyle}
                src={avatarDoubleClick ? avatarDoubleClick : 'https://i.pravatar.cc/300?img=52'}
                alt="avatar" />
            
            <p style={nameStyle}>{firstNameDoubleClick} {lastNameDoubleClick}</p>

            <button onClick={() => del(id)} style={btnStyle}>Delete</button>
        </div>
    )
}

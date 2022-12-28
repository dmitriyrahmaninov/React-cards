import React from 'react'

export default function ToDoForm({createCards}) {

    const formStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
    }

    const inputStyle = {
        borderRadius: '3px',
        border: '1px solid black',
        height: '30px',
        width: '150px',
        fontSize: '20px',
        color: '#57606f'
    }

    const btnStyle = {
        cursor: 'pointer',
        paddind: '10px',
        margin: '5px',
        backgroundColor: '#57606f',
        color: 'white',
        borderRadius: '7px',
        border: '1px solid #57606f',
        width: '150px',
        height: '35px',
        fontSize: '20px'
    }

    const submit = event => {
        event.preventDefault();
        const { first_name, last_name } = event.target;
        createCards(first_name.value, last_name.value);
        first_name.value = '';
        last_name.value = '';
    }

    return (
        <form style={formStyle} onSubmit={submit}>
            <input style={inputStyle} type="text" placeholder='First Name' name='first_name' />
            <input style={inputStyle} type="text" placeholder='Last Name' name='last_name' />
            <button style={btnStyle}>Add</button>
        </form>
    )
}

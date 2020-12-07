import React, { useState } from 'react'

const Item = ({ content, deleteTodo, id, isDone, setIsDone }) => {

    const handleDelete = () => {
        deleteTodo(id)
    }

    return (
        <li>
            <input type="checkbox" onChange={() => {
                setIsDone(!isDone)
            }} />
            <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{content}</span>
            <button onClick={handleDelete}>削除</button>
        </li>
    )
}

export default Item

// { textDecoration: isDone ? 'line-through' : 'none' }
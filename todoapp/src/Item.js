import React from 'react'

const Item = ({ deletedTodos, changeIsDone, todo }) => {
    return (
        <li className="list">
            <input type="checkbox" onChange={() => {
                changeIsDone(todo.id)
            }} />
            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.content}</span>
            <button onClick={() => { deletedTodos(todo.id) }} className="dele">削除</button>
        </li>
    )
}

export default Item


// { textDecoration: isDone ? 'line-through' : 'none' }
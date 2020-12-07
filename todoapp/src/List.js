import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo, isDone, setIsDone }) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return (
                        <Item content={todo.content} todos={todos.id} deleteTodo={deleteTodo}
                            id={todo.id} key={todo.id} isDone={isDone} setIsDone={setIsDone} />
                    )
                })
            }
        </ul>
    )
}

export default List
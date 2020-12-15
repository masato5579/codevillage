import React from 'react'
import Item from './Item'

const List = ({ todos, deletedTodos, changeIsDone }) => {
    return (
        <>
            <ul className="listUl">
                {
                    todos.map((todo) => {
                        return (
                            <Item deletedTodos={deletedTodos} key={todo.id} changeIsDone={changeIsDone} todo={todo} />
                        )
                    })
                }
            </ul>
        </>
    )
}

export default List
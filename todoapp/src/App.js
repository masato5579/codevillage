import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'

const App = () => {
    const [todos, setTodos] = useState([

    ])


    const changeIsDone = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone,
                    }
                } else {
                    return todo
                }
            })
        )
    }

    const addTodo = content => {
        setTodos(
            [
                ...todos,
                {
                    content: content,
                    id: shortid.generate(),
                    isDone: false
                }
            ]
        )
    }

    // const deletetodo = id => {
    //     const deletedTodos = todos.filter((todo) => {
    //         return todo.id !== id;
    //     });

    //     setTodos(deletedTodos)
    // }

    const deletedTodos = id => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }



    return (
        <>
            <h1 className='title'>全集中のタスク</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} deletedTodos={deletedTodos} changeIsDone={changeIsDone} />
        </>
    )
}

export default App
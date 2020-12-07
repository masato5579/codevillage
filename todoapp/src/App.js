import React from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'


const App = () => {
    const [todos, setTodos] = React.useState([

    ])

    const addTodo = content => {
        setTodos(
            [
                ...todos,
                {
                    content: content,
                    id: shortid.generate()
                }
            ]
        )
    }

    const [isDone, setIsDone] = React.useState(false)

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <>
            <h1>TodoApp</h1>
            <Form addTodo={addTodo} todos={todos} />
            <List todos={todos} deleteTodo={deleteTodo} isDone={isDone} setIsDone={setIsDone} />
        </>
    )
}

export default App
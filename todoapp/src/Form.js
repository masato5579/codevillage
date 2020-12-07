import React from 'react'

const Form = ({ addTodo }) => {
    const form1 = document.getElementById('form1')
    const [value, setValue] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form1.value === '') {
            alert('中身がからです')
        } else {
            addTodo(value)
            form1.value = ''
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={e => {
                setValue(e.target.value)
            }} id="form1" />
        </form>
    )
}



export default Form
import React from 'react'

const Form = ({ addTodo }) => {
    const form1 = document.getElementById('form1')
    const [value, setValue] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            alert('中身が空です')
        } else {
            addTodo(value)
            form1.value = ''
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={e => {
                setValue(e.target.value)
            }} id="form1" autocomplete="off" />
        </form>
    )
}



export default Form
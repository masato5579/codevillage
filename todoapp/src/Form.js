import React from 'react'

const Form = ({ addTodo }) => {
    const form1 = document.getElementById('form1')
    const [value, setValue] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            alert('全集中の呼吸ができていません。')
        } else {
            addTodo(value)
            form1.value = ''
        }
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type='text' onChange={e => {
                setValue(e.target.value)
            }} id="form1" autoComplete="off" />
        </form>
    )
}



export default Form
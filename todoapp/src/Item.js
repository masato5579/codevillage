
const Item = ({ content, deleteTodo, id, isDone, setIsDone }) => {

    const handleDelete = () => {
        deleteTodo(id)
    }



    return (
        <li className="list">
            <input type="checkbox" onChange={() => {
                setIsDone(!isDone)
            }} />
            <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{content}</span>
            <button onClick={handleDelete} className="dele">削除</button>
        </li>
    )
}

export default Item


// { textDecoration: isDone ? 'line-through' : 'none' }
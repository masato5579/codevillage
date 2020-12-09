import Item from './Item'

const List = ({ todos, deleteTodo }) => {
    return (
        <ul className="listUl">
            {
                todos.map((todo) => {
                    return (
                        <Item content={todo.content} todos={todos.id} deleteTodo={deleteTodo}
                            id={todo.id} key={todo.id} />
                    )
                })
            }
        </ul>
    )
}

export default List
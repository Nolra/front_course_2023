export default function TodoList({ theme, items }) {
    return (
        <div className={theme}>
            <p>
                <b> Note: <code>filterTodos</code> is artificially slowed down!</b>
            </p>
            <ul>
                {items.map((todo) => (
                    <li key={todo.id}>
                        {todo.completed ? (<s>{todo.text}</s>) : (todo.text)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

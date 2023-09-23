import { useMemo } from 'react';
import List from './List';
import { filterTodos } from './utils';

export default function TodoList({ todos, theme, tab }) {
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab), 
        [todos, tab]
    );
    
    return (
        <div className={theme}>
            <p><b> Note: <code>List</code> is artificially slowed down!</b></p>
            <List items={visibleTodos} />
        </div>
    );
}


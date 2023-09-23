import { memo } from 'react';

const List = memo(function List({ items }) {
    console.log('[SLOW] Rendering <List /> with ' +  items.length + ' items' );
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {/* Do nothing for 500 ms */}

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.completed ? ( <s>{item.text}</s> ) : ( item.text )}
                </li>
            ))}
        </ul>
    );
});

export default List;

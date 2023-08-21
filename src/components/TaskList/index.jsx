import { useReducer, useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import styles from "./tasks.module.css"
import { tasksReducer } from './taskReducer';

const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    )

    return (
        <div className={styles.contain}>
            <h1>Prague itinerary</h1>
            <AddTask dispatch={dispatch} />
            <TaskList tasks={tasks} dispatch={dispatch} />
        </div>
    );
}
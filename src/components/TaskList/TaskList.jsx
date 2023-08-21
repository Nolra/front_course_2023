import React from "react";
import styles from "./tasks.module.css"
import TaskItem from "./TaskItem";

const TaskList = ({tasks, dispatch}) => {
    return (
        <ul className={styles.list}>
            {
                tasks.map(task =>(
                    <TaskItem key={task.id} task={task} dispatch={dispatch} />
                ))
            }
        </ul>
    )
}
export default TaskList;
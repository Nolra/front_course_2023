import React, { useState } from "react";
import styles from "./tasks.module.css"
import EditPanel from "./EditPanel";

const TaskItem = ({task, dispatch}) => {
    return (
        <li className={styles.listItem}>
            <input 
                type="checkbox" 
                checked={task.done} 
                onChange={() => dispatch( { type: 'checked', payload: { id: task.id } } )}
            /> 
            <EditPanel task={task} dispatch={dispatch} />
            <button 
                className={styles.button} 
                onClick={() => dispatch({ type: 'deleted', payload: { taskId: task.id }})}
            > Delete </button>
        </li>
    )
}
export default TaskItem;

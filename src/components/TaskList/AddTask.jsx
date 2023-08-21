import React, { useState } from "react";
import styles from "./tasks.module.css"

let nextId = 3;

const AddTask = ({ dispatch }) => {
    const [value, setValue] = useState("");
    const add = () => {
        if (value) {
            dispatch({ type: 'added',  payload: { id: nextId++, text: value } }); 
            setValue("");
        } else {
            console.log("enter task name");
        }
    }

    return (
        <div>
            <input className={styles.input} value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className={styles.button} onClick={add}>
                Add
            </button>
        </div>
    )
}
export default AddTask;
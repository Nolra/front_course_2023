import React, { useState } from "react";

const EditPanel = ({task, dispatch}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(task.text);

    const save = () => {
        dispatch({type: 'titleChanged', payload: { id: task.id, title }})
        setIsEdit(false);
    }
    const cancel = () => {
        setTitle(task.text);
        setIsEdit(false);
    }

    return (
      isEdit 
        ? (
            <>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <button onClick={save}>save</button>
                <button onClick={cancel}>cancel</button>            
            </>
        ) 
        : (
            <>
                {task.text}
                <button onClick={() => setIsEdit(true)}>edit</button>                    
            </>
        )
    )
}
export default EditPanel;
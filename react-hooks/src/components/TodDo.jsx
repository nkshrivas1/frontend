import { useState } from "react"
import TextField from '@mui/material/TextField';

const TodDo = () => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({ message: '', done: false })
    const addTask = () => {
        setTasks([...tasks, task])
        setTask({ message: '', done: false })
    }
    const markDone = (index) => {
        const updatedTasks = tasks.map((t, i) => {
            if (i == index) {
                return { ...t, done: !t.done }
            }
            else {
                return t;
            }
        })
        setTasks(updatedTasks)
    }
     const deleteTask = (index) => {
        const updatedTasks = tasks.filter((t, i) => i != index)
        setTasks(updatedTasks)
    }
    
    return (
        <>
            <div>ToDo</div>
            <label htmlFor="task">New task</label>
            {/* <input type="text" name="task" id=""
                value={task.message}
                onChange={(e) =>
                    setTask({
                        message: e.target.value,
                        done: false
                    })}
            /> */}
            <TextField 
                label="Task"
                type="text"
                defaultValue={task.message}
                onChange={(e) =>
                    setTask({
                        message: e.target.value,
                        done: false
                    })}
            />

            <button onClick={addTask}>+Add</button>

            <div className="list">
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Done</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((t, i) => (
                                <tr style={{ backgroundColor: t.done ? 'green' : 'red' }}>
                                    <td>{t.message}</td>
                                    <td>
                                        <button
                                            onClick={() => markDone(i)}>
                                            {t.done ? 'UnDone' : 'Done'}</button>
                                    </td>
                                     <td>
                                        <button
                                            onClick={() => deleteTask(i)}>
                                            Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default TodDo
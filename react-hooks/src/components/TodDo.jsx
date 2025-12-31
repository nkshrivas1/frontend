import { useState } from "react"

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
    return (
        <>
            <div>ToDo</div>
            <label htmlFor="task">New task</label>
            <input type="text" name="task" id=""
                value={task.message}
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
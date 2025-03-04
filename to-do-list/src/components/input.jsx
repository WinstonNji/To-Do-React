import { useState, createContext } from "react"

export const NewTaskManager = createContext()

function NewTask({children}){

    const [task, setTask] = useState('')
    const [taskArr, setTaskArr] = useState([])

    const addTask = (event) => {
        event.preventDefault()

        if(!task) return 

        setTaskArr((t) => [task, ...t]);
        setTask('')
    }

    console.log(taskArr)

    const newTask = (event) => {
        setTask(event.target.value)
    }

    console.log(task)

    return (
        <NewTaskManager.Provider value={{taskArr, task, setTaskArr}}>
            <div className="content-center justify-center flex flex-col h-[100vh] gap-5">
                <div className="text-center text-2xl font-bold">
                    <h1>To-Do List</h1>
                </div>
                <form className="bg-white relative rounded-md" >
                    <input onChange={newTask}   type="text" 
                    placeholder="Enter a new Task"
                    className="p-2 font-light focus:outline-none rounded-md w-[83%]"
                    value={task}
                    />
                    <button onClick={addTask} className="p-2  absolute right-0 font-bold text-black border-l-2 border-slate-600 hover:bg-slate-400 hover:rounded-sm" type="submit">
                        Add
                    </button>
                </form>
                
                {children}
            </div>
            
        </NewTaskManager.Provider>
        
    )

}

export default NewTask
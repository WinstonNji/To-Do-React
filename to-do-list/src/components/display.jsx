import { useContext, useEffect, useState } from "react"
import { NewTaskManager } from "./input"

function DisplayTask(){
    const {taskArr, task, setTaskArr} = useContext(NewTaskManager)

    const [liveTaskUpdate, setTaskUpdate] = useState()

    useEffect(() => {
        if(task === ''){
            setTaskUpdate('Enter a new task')
        }else{
            setTaskUpdate(task)
        }
    }, [task])

    function deleteTask(index){
        setTaskArr(t => taskArr.filter((_,i) => (
            index !== i
        )))
    }

    function moveUp(index){
        const updateTaskArr = [...taskArr]
        console.log(updateTaskArr, 'coppy')

        if(index > 0){
            [updateTaskArr[index], updateTaskArr[index - 1]] = [updateTaskArr[index - 1], updateTaskArr[index]]

            setTaskArr(updateTaskArr)
        }
    }

    function moveDown(index){
        const updateTaskArr = [...taskArr]
        
        if(index < updateTaskArr.length - 1){
            [updateTaskArr[index], updateTaskArr[index + 1]] = [updateTaskArr[index + 1], updateTaskArr[index]]
             
            setTaskArr(updateTaskArr)
        }

        
    }

    return (
        <ul className=" flex flex-col gap-3 w-[80vw] lg:w-[50vw]">

            <li className=" bg-white box-border p-2 rounded-sm flex gap-1 content-center justify-center">
                <span className="flex-1 font-semibold ">{liveTaskUpdate}</span>
                {/* <button className="bg-gray-400 p-2 hover:bg-gray-500 active:bg-gray-400">👆🏾</button>
                <button className="bg-gray-400 p-2 hover:bg-gray-500 active:bg-gray-400">👇🏾</button>
                <button className="bg-gray-400 p-2 hover:bg-gray-500 active:bg-gray-400 font-bold hover:text-white">Delete</button> */}
            </li>

            {taskArr.map((task,index) => (
                <li key={index} className=" bg-white box-border p-2 rounded-sm flex gap-1 content-center justify-center">
                <span className="flex-1 font-semibold">{task}</span>

                <button onClick={() => moveUp(index)} className="bg-gray-400 p-2 hover:bg-gray-500 active:bg-gray-400">👆🏾</button>
                <button onClick={()=> moveDown(index)} className="bg-gray-400 p-2 hover:bg-gray-500 active:bg-gray-400">👇🏾</button>
                <button onClick={() => deleteTask(index)} className="bg-gray-400 p-2 hover:bg-gray-500 active:bg-gray-400 font-bold hover:text-white">Delete</button>
            </li>
            ))}
        </ul>
    )
}

export default DisplayTask
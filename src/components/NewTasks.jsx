

import { useState } from "react"

export default function NewTasks({onAddTask}) {


    // note that we need to store these task in the app.jsx for storing the data in the project array

    const [userInput, setUserInput] = useState(' ');

8
    function handleChange(event) {
        setUserInput(event.target.value);


    }
    function handleClick(){
        // here i am forwarding the value ro app.jsx and then resetting the input field back to empty string 
        setUserInput(' ');

        onAddTask(
            userInput
        )


        // here the problem is newtask component is in the task component and the task component is in the selectedproject component
        // this is something called as prop drilling
    }




    return <div className="flex items-center gap-4 ">
        <input type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            onChange={handleChange} value={userInput}
        />
        <button 
        className=" text-stone-700 hover:text-stone-950" 
        onClick={handleClick}
        >
            Add Task
        </button>
    </div>
}
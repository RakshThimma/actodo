import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function Tododcontainer() {
    const [ActivityArray, setActivityArray] = useState([
        {
            id: 1,
            activity: "Wake up at 6 am"
        },
        {
            id: 2,
            activity: "Go for a walk"
        },
        {
            id: 3,
            activity: "Have Breakfast"
        }
    ])
    return (
        <div>
            <div className="flex space-between gap-5 align-items-center flex-wrap">
                <AddTodoForm ActivityArray={ActivityArray} setActivityArray={setActivityArray}/>
                <TodoList ActivityArray={ActivityArray} setActivityArray={setActivityArray}/>
            </div>
        </div>
    )
}

export default Tododcontainer
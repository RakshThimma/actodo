// import { useState } from "react"
import TodoItem from "./TodoItem"
function TodoList(props) {
    const ActivityArray = props.ActivityArray
    const setActivityArray = props.setActivityArray
    return (
        <div className="bg-green-300 border rounded-md p-3 flex-grow">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            
            {
                ActivityArray.length === 0 ? <p>You haven't added anything yet</p> : ""
            }
            {
                ActivityArray.map(function (item, index) {
                    return <TodoItem id={item.id}index={index} activity={item.activity} ActivityArray={ActivityArray} setActivityArray={setActivityArray}/>
                })
            }
        </div>
    )
}

export default TodoList
import { useState } from "react"
function AddTodoForm(props) {
    const ActivityArray = props.ActivityArray
    const setActivityArray = props.setActivityArray

    const [item,setitem] = useState("")
    function handleChange(evt) {
        setitem(evt.target.value)
    }
    function handleAdd() {
        setActivityArray([...ActivityArray,{id:ActivityArray.length+1 ,activity:item}])
        setitem("")
    }
    return(
        <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-medium">Manage Activities</h1>
                    <div>
                        <input value={item} onChange={handleChange} type="text" placeholder="Next Activity?" className="border border-black p-1 bg-transparent"></input>
                        <button onClick={handleAdd} className="bg-black text-white border border-black  p-1">Add</button>
                    </div>
        </div>
    )
}
export default AddTodoForm
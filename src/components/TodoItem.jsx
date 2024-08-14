function TodoItem(props) {
    const ActivityArray = props.ActivityArray
    const setActivityArray = props.setActivityArray

    function handleDelete(removeid) {
        var newArr = ActivityArray.filter(function(item) {
            if(removeid === item.id) {
                return false
            }
            else{
                return true
            }
        })
        setActivityArray(newArr)
    }
    return (
        <div className="flex justify-between">
            <p>{props.index + 1}.{props.activity}</p>
            <button onClick={()=>handleDelete(props.id)} className="text-red-600">Delete</button>
        </div>
    )
}

export default TodoItem
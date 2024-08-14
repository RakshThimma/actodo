function Card(props) {
    return(
        <div style={{backgroundColor:props.bg}} className="px-10 py-5 border rounded-md text-center flex-grow">
            <h1 className="font-medium text-2xl">{props.t1}</h1>
            <p>{props.t2}</p>
        </div>
    )
}
export default Card
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Navigate } from "react-router-dom"
function Signup(props) {
    const creds=props.creds
    const setcreds = props.setcreds
    const [euname,setuname]= useState("");
    const [epwd, setpwd] = useState("");
    const navigate = useNavigate();
    function handleuname(evt) {
        setuname(evt.target.value)
    }
    function handlepwd(evt) {
        setpwd(evt.target.value)
    }

    function handleSignup() {
        setcreds([...creds,{uname:euname, pwd:epwd}])
        navigate("/")
    }
    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10 rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input value={euname} onChange={handleuname} placeholder="Username" type="text" className="w-52 border border-black p-1 bg-transparent rounded-md"></input>
                    <input value={epwd} onChange={handlepwd} placeholder="Password" type="text" className="w-52 border border-black p-1 bg-transparent rounded-md"></input>
                    <input placeholder="Confirm Password" type="text" className="w-52 border border-black p-1 bg-transparent rounded-md"></input>
                    <button onClick={handleSignup} className="bg-yellow-400 p-1 rounded-md w-24">Sign up</button>
                    <p>Already have an account? <Link to="/" className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup
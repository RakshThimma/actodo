import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Navigate } from "react-router-dom";
function Login(props) {
    const [euname, setuname] = useState("");
    const [epwd, setpwd] = useState("");
    const navigate = useNavigate();
    const creds = props.creds

    const [ruser, setruser] = useState(true)

    function handleuname(evt) {
        setuname(evt.target.value)
    }
    function handlepwd(evt) {
        setpwd(evt.target.value)
    }

    function handleLogin() {
        var userfound = false
        creds.forEach(function (item) {
            if (euname === item.uname && epwd === item.pwd) {
                console.log("Login Successful")
                userfound = true
                navigate("/landing", {state:{user:euname}})
            }
        })
        if (userfound === false) {
            console.log("Login Failed")
            setruser(false)
        }
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {
                    ruser ? <p>I help you manage your activities ater you login :)</p> : <p className="text-red-700">Please Sign Up before Login !</p>
                }
                <div className="flex flex-col gap-2 my-2">
                    <input value={euname} onChange={handleuname} placeholder="Username" type="text" className="w-52 border border-black p-1 bg-transparent rounded-md"></input>
                    <input value={epwd} onChange={handlepwd} placeholder="Password" type="text" className="w-52 border border-black p-1 bg-transparent rounded-md"></input>
                    <button onClick={handleLogin} className="bg-violet-600 p-1 rounded-md w-24">Login</button>
                    <p>Don't have an account? <Link to="/signup" className="underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login
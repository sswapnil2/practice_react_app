import React, { useEffect, useState } from "react";
import Axios from "axios";




export default (props) => {

    const [ userData,  setUserData ] = useState({});

    async function getUserDetails(){
        const response = await Axios.get("http://5bb1bc576418d70014071c7e.mockapi.io/modal/list/1")
        // console.log(response.data)
        setUserData(response.data);
    }

    useEffect(() => {
        console.log("use effect render");
        getUserDetails();
    }, [])
    console.log("render", userData)
    return (
        <div>
            <label>id</label><p>{userData.id}</p>
            <label>name</label><p>{userData.name}</p>
            <label>email</label><p>{userData.email}</p>
            <label>password</label><p>{userData.password}</p>
            <label>image</label><p>{userData.image}</p>
            <label>hobbies</label><p>{userData.hobbies && userData.hobbies.join(", ")}</p>
            <label>isactive</label><p>{userData.isactive === true ? "Is active" : "Not active"}</p>



        </div>
    )
}
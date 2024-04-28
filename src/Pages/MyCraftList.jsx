import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Component/AuthProvider";


const MyCraftList = () => {
    const {user}  = useContext(AuthContext)
    const [item,setItem] =useState([])
    console.log(user.email);

// console.log(user);

useEffect(()=>{
    fetch(`http://localhost:5000/addcraft/${user.email}`)
    .then((res)=>res.json())
    .then(data=>{
        setItem(data)
        console.log(data);
    })
},[user])

    return (
        <div className="mt-20">
            <h2>my craft list</h2>
            {
                item.map(p=>(
                    <div> p
                    </div>
                ))
            }
        </div>
    );
};

export default MyCraftList;
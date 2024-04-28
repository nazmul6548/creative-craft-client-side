import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Component/AuthProvider";
import MyCardDesign from "../Component/MyCardDesign";


const MyCraftList = () => {
    const {user}  = useContext(AuthContext)
    const [item,setItem] =useState([])
    console.log(user.email);

// console.log(user);

useEffect(()=>{
    if (user?.email) {
        fetch(`http://localhost:5000/artCraft/email/${user.email}`)
    .then((res)=>res.json())
    .then(data=>{
        setItem(data)
        console.log(data);
    }) 
    }
   
},[user])

    return (
        <div className="mt-20">
            <h1 className="text-center text-5xl font-bold pt-5 pb-5">My Art&Crafts</h1>
            <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
            {
            item.map(p=><MyCardDesign key={item._id} item={item} p={p}></MyCardDesign>)
            
        }
        </div>
        </div>
    );
};

export default MyCraftList;
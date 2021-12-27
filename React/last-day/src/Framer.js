import { useEffect, useState } from "react"
import { getFramerById, getFramersList } from "./farmer.servies";

export default()=>{
    const [famerList,setFarmerList]=useState([]);
    useEffect(()=>{
        getFramersList().then((response)=>{
            if(response && response.data){
                setFarmerList(response.data);
        }
    }),[]}

   


    return(<>

    <h1 className="text-centre">Framers List</h1>
    <table className="table">

        <thead>

        <tr >
        <td>Name</td>
        <td>Mobile</td>


        </tr>

        </thead>
            <tbody>
                {famerList.map((farmer)=>{
                    return(
                        <tr key={farmer.framerId}>
                            <td>{framer.framerName}</td>
                            <td>{framer.framerContact}</td>
                            <td ><button onClick={framer.framerId}></button></td>
                        
                        </tr>
                        
                    )
                })}
            </tbody>



    </table>
    </>
    // }
     
    //  const onGetDetailsClickhandler=(framerId)=>{
    //     getFramerById(framerId).then((response)=>{
    //         if(response && response.data){
    //             alert("Name" + response.data.framerName);
    //         }
    //     })
    // }
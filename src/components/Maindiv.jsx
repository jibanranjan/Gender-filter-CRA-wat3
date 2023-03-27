import { useState,useEffect } from 'react';

import './Maindiv.css';


function Maindiv(props){
    
    const [user,setUser]=useState([])
    
    useEffect(()=>{
        AllUser()
    
    },[]);

    const AllUser=()=>{
        fetch("https://randomuser.me/api/?results=50")
        .then((res)=>res.json())
        .then((data)=>{
          
            setUser(data.results)
            console.log(user)
        })}
    console.log(user)



    //     const AllUser= async()=>{
    //   var res = await fetch("https://randomuser.me/api/?results=30")
    // var data = await res.json()
    //   setUser(data.results)
    //     console.log(user)
    
    // console.log(user)

    



    
     const MaleUser =()=>{
        setUser(maleUserList)

     }

     const maleUserList=user.filter((genderIs)=>{return genderIs.gender==='male';    
       })
    //    console.log(maleUserList)



     const FemaleUser =()=>{
        setUser(femaleUserList)

     }

     const femaleUserList=user.filter((genderIs)=>{return genderIs.gender==='female';    
    })
    // console.log(femaleUserList)




    return (
        <div className="MaindivContainer">    <div className="btns">
                    <lable><input onChange={AllUser}  name="action" type="radio" defaultChecked  />ALL</lable>    
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<lable><input onChange={MaleUser} name="action" type="radio" />Male</lable>  
                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; <lable><input onChange={FemaleUser} name="action" type="radio" />Feamle</lable>
                 </div>  

                 {     user.length >0 && <table  className='tablebody'cellPadding={10}>
                         <thead><tr className='tableh'>
                               <th>IMAGE</th>
                               <th>NAME</th>
                               <th>EMAIL</th>
                               <th>GENDER</th>
                               </tr></thead> 
                             <tbody>
                                {
                                    user.map((ele)=>{  
                                        return <tr className='trdata'>
                                        <td> <img src={ele.picture.medium} /> </td>
                                        <td>{ele.name.title}&nbsp;{ele.name.first} {ele.name.last}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.gender}</td>
                                        </tr>
                                    })
    
                                }
    
                             </tbody> </table>
    
            
                 }

        </div>
    )

                }

export default Maindiv;
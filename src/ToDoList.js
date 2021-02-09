import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import List from './List';



const ToDoList=()=>{
    const[item, setitem]=useState('');
    const[itemarray, setitemarray]=useState([]);
    const Itemevent=(event)=>{
        setitem(event.target.value);
    }
    const Additem=()=>{

            setitemarray((olditem)=>{
                return[...olditem, item]
            })
         setitem('');
    }
    return(
        <>
     <div className="maindiv">
     <div className="centerdiv">
         <br/>
         <h1>TODO LIST</h1>
         <br/>
         <input type="text" placeholder="Add an item" onChange={Itemevent} value={item}/>
        <Tooltip title="Add">
        <Button className="newbtn" onClick={Additem}>
        <AddIcon/>
        </Button>
        </Tooltip>
        <br/>
        <ol>
           {
               itemarray.map((currelem, i)=>{
                   return <li>
                   {<List  
                       items={currelem}
                       key={i}
                       id={i}
                   />}</li>

               })
           }
        </ol>

     </div>

     </div>


        </>
    )

}


export default ToDoList;
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const List=(props)=>{
    const [line, setline]=useState(false);
    const cutit=()=>{
        setline(true);
    }
 return(
     <>

     <div className="todostyle">
       <span onClick={cutit}>
        <DeleteIcon className="deleteIcon"/>
        </span>

    <li style={{textDecoration:line?'line-through':'none'}}>{props.items}</li>
    </div>
    </>
 )

}

export default List;
import React, {ChangeEvent, useState } from 'react';


type FullInputPropsType = {
   addMessage:(title:string)=> void
}


export const FullInput = (props:FullInputPropsType) => {
    let [title, setTitle] = useState('')
    

    const onchangeInputHandler=(event:ChangeEvent<HTMLInputElement> )=>{
    setTitle(event.currentTarget.value)
    }

    const onclickButtonHandler=()=>{
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
        <input value={title} onChange={onchangeInputHandler}/>
        <button onClick={onclickButtonHandler}>+</button>
      </div>
    );
};

import React from 'react';

type ButtonPropsType = {
    name: string
    caLLBack: () => void
}


export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.caLLBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};


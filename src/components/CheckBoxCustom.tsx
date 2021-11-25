import React, {FC, useState} from 'react'
import {Checkbox} from "@mui/material";
import {useDispatch} from "react-redux";
import {checkFilter, sortByDefault} from "../redux/reducers/fetchProductsReducer";


interface IPropsCheck{
    name: string
}


const CheckBoxCustom: FC<IPropsCheck> = ({name}) => {
    const dispatch = useDispatch()
    const [check,setCheck] = useState<boolean>(false)
    const nameForAttribute = name.toLocaleLowerCase()


    const handleCheck = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setCheck(!check)
        const goalCheck = e.target.value
        if(goalCheck){
            switch (goalCheck){
                case 'adidas': dispatch(checkFilter('adidas')); break;
                case 'asics': return dispatch(checkFilter('asics')) ; break;
                case 'Reebook': return dispatch(checkFilter('Reebook')); break;
            }
        }else {
            dispatch(sortByDefault())
        }
    }

    return (
        <>
            <label htmlFor={nameForAttribute}>{name}</label>
            <Checkbox name={nameForAttribute} id={nameForAttribute} value={name} checked={check} onChange={handleCheck} />
        </>
    )
}

export default CheckBoxCustom
import React, {FC} from 'react'
import '../index.scss'
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/rootReducer";


const SneakerPage: FC = () => {
    const history = useHistory()
    const sneaker = useSelector((state:RootState) => state.sneakerItem.sneaker);

    console.log(sneaker)
    const handleClickToBack = (): void => {
        history.goBack()
    }
    return (
        <div className="sneakerPage__wrapper">
            <h1 className="sneakerPage__title">
                Hello SneakerPage
            </h1>
            <Button variant='contained' onClick={handleClickToBack}>Назад</Button>
        </div>
    )
}

export default  SneakerPage;
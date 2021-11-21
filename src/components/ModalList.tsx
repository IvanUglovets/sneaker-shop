import React from 'react'
import {IProduct} from "../types/IProduct";
import {Card, CardContent, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/rootReducer";
import ModalItem from "./ModalItem";


const ModalList = () => {
    const itemsBasket = useSelector((state: RootState) => state.basketItems.basketSneakers)

    return (
        <div className='list__products'>
            {itemsBasket && itemsBasket.map((item: IProduct, index: number) =>
                    <ModalItem  key={item.id} item={item} index={index}/>
            )}
        </div>
    )
}



export default ModalList;
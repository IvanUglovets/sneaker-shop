import React, {FC} from 'react'
import {Button, Grid, Typography} from "@mui/material";
import BasketItem from "./BasketItem";
import {useDispatch, useSelector} from "react-redux";
import {IProduct} from "../types/IProduct";
import {RootState} from "../redux/reducers/rootReducer";
import '../index.scss'
import {deleteAllItems} from "../redux/reducers/basketReducer";


const BasketList: FC = () => {
    const dispatch = useDispatch()
    const itemsBasket = useSelector((state: RootState) => state.basketItems.basketSneakers)

    const deleteAllSneakers = () => {
        dispatch(deleteAllItems())
    }

    return (
        (itemsBasket.length) > 0
            ?
            <div>
                <Grid container sx={{mt: "1rem"}} spacing={2}>
                    {itemsBasket && itemsBasket.map((basketItem: IProduct) => <BasketItem
                        key={`${basketItem.id}+${Math.random() * 1000}`} item={basketItem}/>)}
                </Grid>
                <Button variant="contained"  sx={{fontSize: "16px", mt: "1rem"}} onClick={deleteAllSneakers}>Удалить все товары</Button>
            </div>
            :
            <div className="wrapper__basket-empty">
                <img src="https://ninel.ru/upload/cart-empty.png" alt="cart is empty"/>
                <Typography variant="h4" component="span">Корзина пуста!</Typography>
            </div>
    )
}


export default BasketList
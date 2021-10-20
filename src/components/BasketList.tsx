import React, {FC} from 'react'
import {Grid, Typography} from "@mui/material";
import BasketItem from "./BasketItem";
import {useSelector} from "react-redux";
import {IProduct} from "../types/IProduct";
import {RootState} from "../redux/reducers/rootReducer";
import '../index.scss'


const BasketList: FC = () => {
    const itemsBasket = useSelector((state: RootState) => state.basketItems.basketSneakers)
    return (
        (itemsBasket.length) > 0
            ?
            <Grid container sx={{mt: "1rem"}} spacing={2}>
                {itemsBasket && itemsBasket.map((basketItem: IProduct) => <BasketItem
                    key={`${basketItem.id}+${Math.random() * 1000}`} item={basketItem}/>)}
            </Grid>
            :
            <div className="wrapper__basket-empty">
                <img src="https://ninel.ru/upload/cart-empty.png" alt="cart is empty"/>
                <Typography variant="h4" component="span">Корзина пуста!</Typography>
            </div>
    )
}


export default BasketList
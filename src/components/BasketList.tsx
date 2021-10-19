import React, {FC} from 'react'
import {Grid, Typography} from "@mui/material";
import BasketItem from "./BasketItem";
import {useSelector} from "react-redux";
import {IProduct} from "../types/IProduct";
import {RootState} from "../redux/reducers/rootReducer";

interface IBasketItems{
    basketSneakers: IProduct[]
}


const BasketList: FC = () => {
    const itemsBasket = useSelector((state: RootState) => state.basketItems.basketSneakers)
    return (
        (itemsBasket.length) > 0
                ?
                <Grid container spacing={2} sx={{mt: "1rem"}}>
                    {itemsBasket && itemsBasket.map((basketItem: IProduct) => <BasketItem
                        key={`${basketItem.id}+${Math.random() * 1000}`} item={basketItem}/>)}
                </Grid>
                :
                <Typography variant="h4" component="span">Cart is empty!</Typography>
    )
}


export default BasketList
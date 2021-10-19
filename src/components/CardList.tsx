import React, {FC, useState} from "react";
import {Grid, Typography} from "@mui/material";
import CardSneaker from './CardSneaker'
import {useSelector} from "react-redux";
import {IProduct} from "../types/IProduct";
import {RootState} from "../redux/reducers/rootReducer";


const CardList: FC = () => {
    const products = useSelector((state: RootState) => state.items.products)
    return (
        <>
            <Typography variant="h4" component="h1" sx={{color: "blue", margin: "20px 0 0 20px"}}>Каталог</Typography>
            <Grid
                container
                spacing={3}
                sx={{mt: "2rem"}}
                alignItems="center"
                direction="row"
                justifyContent="center">
                {products && products.map((product: IProduct) =>
                    <CardSneaker key={product.id} sneaker={product} />)}
            </Grid>
        </>
    )
}

export default CardList;
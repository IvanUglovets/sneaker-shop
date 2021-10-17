import React, {FC} from "react";
import {Grid} from "@mui/material";
import CardSneaker from './CardSneaker'
import {useSelector} from "react-redux";
import {IProduct} from "../types/IProduct";

const CardList: FC = () => {
    const {products} = useSelector((state:any) => state.items)
    return (
        <Grid container spacing={3}  sx={{mt: "2rem"}} >
            {products && products.map((product: IProduct, index: number) => <CardSneaker key={product.id} sneaker={product} index={index}/>)}
        </Grid>
    )
}

export default CardList;
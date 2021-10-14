import React, {FC} from "react";
import {Grid} from "@mui/material";
import Card from './CardSneaker'
import {useSelector} from "react-redux";
import {IProduct} from "../redux/reducers/fetchProductsReducer";

const CardList: FC = () => {
    const {products} = useSelector((state:any) => state.products)
    return (
        <Grid container spacing={3}  sx={{mt: "2rem"}}>
            {products.map((product: IProduct) => <Card key={product.id} {...product}/>)}
        </Grid>
    )
}

export default CardList;
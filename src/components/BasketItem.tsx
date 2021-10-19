import React, {FC} from 'react'
import {Grid, Paper, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {IProduct} from "../types/IProduct";
import '../index.scss'
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {deleteItem} from "../redux/reducers/basketReducer";


interface IBasketProps {
    item: IProduct
}


const BasketItem: FC<IBasketProps> = ({item}) => {
    const dispatch = useDispatch()
    const {title, subTitle, price, src, id} = item

    const deleteItemBasket = (id: number) => {
        dispatch(deleteItem(id))
    }

    return (
        <Grid item sx={{width: "100%"}} >
            <Paper elevation={3} sx={{display: "flex", width: "100%" , justifyContent:"space-between"}}>
                <img src={src}  alt="sneaker" className="img__basket"/>
                <div>
                    <Typography>{title}</Typography>
                    <Typography>{subTitle}</Typography>
                </div>
                <div>
                    <Typography>{price} руб.</Typography>
                    <Button onClick={()=>deleteItemBasket(id)}><DeleteIcon /></Button>
                </div>
            </Paper>
        </Grid>
    )
}

export default BasketItem;
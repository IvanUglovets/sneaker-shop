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

        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3}
                   sx={{display: "flex", width: "100%", justifyContent: "space-between", alignItems: 'center'}}>
                <img src={src} alt="sneaker" className="img__basket"/>
                <div className="wrapper__title-subtitle">
                    <Typography variant='h5' component='span' sx={{fontSize: "1.3rem"}}>{title}</Typography>
                    <Typography variant='body1' component='span'>{subTitle}</Typography>
                    <div className="wrapper__price">
                        <Typography variant='body1' component='span' sx={{color: "red",fontSize: "20px"}}>{price} руб.</Typography>
                        <Button onClick={() => deleteItemBasket(id)}><DeleteIcon/></Button>
                    </div>
                </div>
            </Paper>
        </Grid>


    )
}

export default BasketItem;
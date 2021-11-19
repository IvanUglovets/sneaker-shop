import React, {FC, useState} from "react";
import {Grid, Paper, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {IProduct} from "../types/IProduct";
import "../index.scss";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {addCount, deleteCount, deleteItem} from "../redux/reducers/basketReducer";




interface IBasketProps {
    item: IProduct

}

const BasketItem: FC<IBasketProps> = ({item}) => {
    const dispatch = useDispatch();
    const {title, subTitle, price, src, id, count} = item

    const deleteItemBasket = (id: number) => {
        dispatch(deleteItem(id));
    };

    const incrementCountSneaker = () => {
        dispatch(addCount(id))

    }

    const decrementCountSneaker = () => {
        dispatch(deleteCount(id))
    }



    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <img src={src} alt="sneaker" className="img__basket"/>


                <div className="wrapper__title-subtitle">
                    <Typography variant="h5" component="span" sx={{fontSize: "1.3rem"}}>
                        {title}
                    </Typography>
                    <Typography variant="body1" component="span">
                        {subTitle}
                    </Typography>
                    <div className="wrapper__amount">
                        <Button variant="contained" size="small" sx={{
                            borderRadius: "50%",
                            maxWidth: '20px',
                            maxHeight: '20px',
                            minWidth: '20px',
                            minHeight: '20px',
                            mr: '5px'
                        }} onClick={incrementCountSneaker}>+</Button>
                        <Typography variant="body1">{count}</Typography>
                        <Button variant="contained" size="small" sx={{
                            borderRadius: "50%",
                            maxWidth: '20px',
                            maxHeight: '20px',
                            minWidth: '20px',
                            minHeight: '20px',
                            ml: '5px'
                        }} disabled={count <= 1} onClick={decrementCountSneaker}>-</Button>
                    </div>
                    <div className="wrapper__price">
                        <Typography
                            variant="body1"
                            component="span"
                            sx={{color: "red", fontSize: "20px"}}
                        >
                            {+price * count} руб.
                        </Typography>
                        <Button onClick={() => deleteItemBasket(id)}>
                            <DeleteIcon/>
                        </Button>
                    </div>
                </div>
            </Paper>
        </Grid>
    );
};

export default BasketItem;

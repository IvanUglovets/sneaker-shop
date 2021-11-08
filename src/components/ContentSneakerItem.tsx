import React, {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/rootReducer";
import {useHistory} from "react-router-dom";
import {Button, Grid, Typography} from "@mui/material";
import {IProduct} from "../types/IProduct";

const ContentSneakerItem: FC = () => {
    const history = useHistory()
    const sneaker: IProduct = useSelector((state: RootState) => state.sneakerItem.sneaker)!;

    if (!sneaker) return null

    const handleClickToBack = (): void => {
        history.goBack()
    }


    return (
        <>
            <Grid item xs={8}>
                <div className='sneaker__item-img'>
                    <img src={sneaker.src} alt={sneaker.title}/>
                </div>
            </Grid>
            <Grid item xs={8}>
                <div className='sneaker__item-title'>
                    <div>
                        <Typography variant='h4' component='h4'>{sneaker.title}</Typography>
                        <Typography variant='body1' component='span'>{sneaker.subTitle}</Typography>
                    </div>
                    <div className='sneaker__item-button'>
                        <Typography variant='h3' component='span' sx={{display: "block", color: "red"}}>{sneaker.price} руб.</Typography>
                        <Button variant="contained" onClick={handleClickToBack}>Назад</Button>
                    </div>

                </div>

            </Grid>

        </>

    )
}

export default ContentSneakerItem;
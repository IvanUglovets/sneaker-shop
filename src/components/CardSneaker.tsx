import React,{FC}  from "react";
import {Grid} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IProduct} from "../types/IProduct";
import {useDispatch} from "react-redux";
import {addToBasket} from "../redux/reducers/basketReducer";

interface IPropsCardSneaker{
    sneaker: IProduct
    index: number
}

const CardSneaker: FC<IPropsCardSneaker> = ({sneaker,index}) => {
    const dispatch = useDispatch()
    const {subTitle,src,title,price,id} = sneaker;

    const changeBasket = () => {
        dispatch(addToBasket(sneaker))
    }
    return (
        <Grid item>
            <Card sx={{ maxWidth: 345, minHeight: 650 }}>
                <CardMedia
                    component="img"
                    alt="sneaker img"
                    height="450"
                    image={src}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {subTitle}
                    </Typography>
                    <Typography variant="h5" component="span" color="text.secondary">
                        {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" onClick={() => changeBasket()}>Buy</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default CardSneaker;
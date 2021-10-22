import React, { FC } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProduct } from "../types/IProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, deleteItem } from "../redux/reducers/basketReducer";
import { RootState } from "../redux/reducers/rootReducer";

interface IPropsCardSneaker {
  sneaker: IProduct;
}

const CardSneaker: FC<IPropsCardSneaker> = ({ sneaker }) => {
  const itemsBasket = useSelector(
    (state: RootState) => state.basketItems.basketSneakers
  );
  const dispatch = useDispatch();
  const { subTitle, src, title, price, id } = sneaker;

  const inBasket = itemsBasket.some((item) => item.id === id);

  const changeBasket = (e: any) => {
    e.stopPropagation();
    dispatch(addToBasket(sneaker));
  };

  const deleteFromBasket = (id: number) => {
    dispatch(deleteItem(id));
  };
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345, minHeight: 650 }}>
        <CardMedia component="img" alt="sneaker img" height="450" image={src} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subTitle}
          </Typography>
          <Typography variant="h5" component="span" color="text.secondary">
            {price} руб.
          </Typography>
        </CardContent>
        <CardActions>
          {inBasket ? (
            <Button
              variant="contained"
              color="warning"
              sx={{ fontSize: "12px" }}
              onClick={() => deleteFromBasket(id)}
            >
              Удалить из корзины
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ fontSize: "12px" }}
              onClick={changeBasket}
            >
              В корзину
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardSneaker;

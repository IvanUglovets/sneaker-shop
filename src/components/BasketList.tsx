import React, {FC} from "react";
import { Button, Grid, Typography } from "@mui/material";
import BasketItem from "./BasketItem";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../types/IProduct";
import { RootState } from "../redux/reducers/rootReducer";
import "../index.scss";
import { deleteAllItems } from "../redux/reducers/basketReducer";
import BasicModal from "./BasicModal";

const BasketList: FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);


  const dispatch = useDispatch();

  const itemsBasket = useSelector(
    (state: RootState) => state.basketItems.basketSneakers
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteAllSneakers = () => {
    dispatch(deleteAllItems());
  };

  return itemsBasket.length > 0 ? (
    <div>
      <Grid container sx={{ mt: "1rem" }} spacing={2}>
        {itemsBasket &&
          itemsBasket.map((basketItem: IProduct) => (
            <BasketItem
              key={`${basketItem.id}+${Math.random() * 1000}`}
              item={basketItem}
            />
          ))}
      </Grid>
      <div className="wrapper__btn-basket">
        <Button
          variant="contained"
          sx={{ fontSize: "16px", mt: "1rem" }}
          onClick={deleteAllSneakers}
        >
          Удалить все товары
        </Button>
        <Button
          variant="contained"
          color="warning"
          sx={{ fontSize: "16px", mt: "1rem" }}
          onClick={handleClickOpen}
        >
          Оформить заказ
        </Button>
        <BasicModal open={open} handleClose={handleClose} />
      </div>
    </div>
  ) : (
    <div className="wrapper__basket-empty">
      <img src="https://ninel.ru/upload/cart-empty.png" alt="cart is empty" />
      <Typography variant="h4" component="span">
        Корзина пуста!
      </Typography>
    </div>
  );
};

export default BasketList;

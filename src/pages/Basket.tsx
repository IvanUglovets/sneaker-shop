import React from "react";
import BasketList from "../components/BasketList";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import "../index.scss";
import { totalSum } from "../models/totalSum";

const Basket = () => {
  const itemsBasket = useSelector(
    (state: RootState) => state.basketItems.basketSneakers
  );
  let totalPrice = totalSum(itemsBasket);
  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="wrapper__title">
        <Typography
          variant="h1"
          component="h4"
          sx={{ fontSize: "36px", color: "blue" }}
        >
          Корзина
        </Typography>
        <div className="wrapper__title-basket">
          {itemsBasket.length > 0 ? (
            <>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontSize: "18px" }}
              >
                Количество товаров: {itemsBasket.length}
              </Typography>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontSize: "26px" }}
              >
                Всего: {totalPrice} руб.
              </Typography>
            </>
          ) : null}
        </div>
      </div>
      <BasketList />
    </div>
  );
};

export default Basket;

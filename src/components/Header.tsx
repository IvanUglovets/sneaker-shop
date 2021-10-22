import React, { FC } from "react";
import "../index.scss";
import { Link } from "react-router-dom";
import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";

const Header: FC = () => {
  const itemsBasket = useSelector(
    (state: RootState) => state.basketItems.basketSneakers
  );
  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h4"
            component="span"
            sx={{
              flexGrow: 1,
              display: "block",
              fontFamily: "Architects Daughter",
            }}
          >
            <Link to="/" className="logo__link">
              Sneaker Shop
            </Link>
          </Typography>
          <Link to="/basket" className="basket__link">
            <ShoppingBasketIcon />
          </Link>
          {itemsBasket.length > 0 ? (
            <Typography
              className="count__sneaker"
              variant="body1"
              component="span"
            >
              {itemsBasket.length}
            </Typography>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

import React, { FC } from "react";
import { Grid, Typography } from "@mui/material";
import CardSneaker from "./CardSneaker";
import { useSelector } from "react-redux";
import { IProduct } from "../types/IProduct";
import { RootState } from "../redux/reducers/rootReducer";
import BasicSelect from "./BasicSelect";
import "../index.scss";

const CardList: FC = () => {
  const products = useSelector((state: RootState) => state.items.products);
  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="wrapper__title-select">
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "blue", margin: "20px 0 0 20px" }}
        >
          Каталог
        </Typography>
        <BasicSelect />
      </div>
      <Grid
        container
        spacing={3}
        sx={{ mt: "2rem" }}
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        {products &&
          products.map((product: IProduct) => (
            <CardSneaker key={product.id} sneaker={product} />
          ))}
      </Grid>
    </div>
  );
};

export default CardList;

import { Dispatch } from "redux";
import {
  fetchErrorCreator,
  fetchLoadingCreator,
  fetchProductsCreator,
  IActionProducts,
} from "../reducers/fetchProductsReducer";
import axios from "axios";
import { IProduct } from "../../types/IProduct";

export function fetchProducts() {
  return async (dispatch: Dispatch<IActionProducts>) => {
    try {
      dispatch(fetchLoadingCreator());
      const response = await axios.get("http://localhost:3000/data.json");
      const products: IProduct[] = await response.data;
      localStorage.setItem("sneakers", JSON.stringify(products));
      dispatch(fetchProductsCreator(products));
    } catch (e) {
      const errorMessage = `An error has occurred: ${e}`;
      dispatch(fetchErrorCreator(errorMessage));
    }
  };
}

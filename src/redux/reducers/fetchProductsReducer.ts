import { FetchProducts } from "../../types/enumFetchProducts";
import { IProduct } from "../../types/IProduct";

export interface IStateProducts {
  isLoading: boolean;
  error: string | null;
  products: IProduct[];
}

export interface IActionProducts {
  type: string;
  payload?: any;
}

export const initialState: IStateProducts = {
  isLoading: false,
  error: null,
  products: [],
};

export const fetchProductsReducer = (
  state = initialState,
  action: IActionProducts
) => {
  switch (action.type) {
    case FetchProducts.FETCH_LOADING:
      return { ...state, isLoading: true, products: [], error: null };
    case FetchProducts.FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        error: null,
      };
    case FetchProducts.FETCH_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case FetchProducts.SORT_BY_PRICE_ASCENDING:
      return {
        ...state,
        products: [...state.products.sort((a, b) => +a.price - +b.price)],
      };

    case FetchProducts.SORT_BY_PRICE_WANING:
      return {
        ...state,
        products: [...state.products.sort((a, b) => +b.price - +a.price)],
      };
    case FetchProducts.SORT_BY_ALPHA:
      return {
        ...state,
        products: [
          ...state.products.sort((a, b) => a.title.localeCompare(b.title)),
        ],
      };
    case FetchProducts.SORT_BY_DEFAULT:
      return {
        ...state,
        products: JSON.parse(localStorage.getItem("sneakers")!),
      };
    case FetchProducts.FILTER_CHECK:
      const filterlist: IProduct[] = JSON.parse(localStorage.getItem("sneakers")!)
      return {
        ...state,
        products: [
            ...filterlist.filter(item => item.subTitle === action.payload)
        ]
      }

    default:
      return state;
  }
};

export const fetchLoadingCreator = () => ({
  type: FetchProducts.FETCH_LOADING,
});

export const fetchProductsCreator = (payload: IProduct[]) => ({
  type: FetchProducts.FETCH_PRODUCTS,
  payload,
});

export const fetchErrorCreator = (message: string) => ({
  type: FetchProducts.FETCH_ERROR,
  payload: message,
});

export const sortByPriceAscending = () => ({
  type: FetchProducts.SORT_BY_PRICE_ASCENDING,
});

export const sortByPriceWaning = () => ({
  type: FetchProducts.SORT_BY_PRICE_WANING,
});

export const sortByAlpha = () => ({
  type: FetchProducts.SORT_BY_ALPHA,
});

export const sortByDefault = () => ({
  type: FetchProducts.SORT_BY_DEFAULT,
});

export const checkFilter = (payload: string) => ({
  type: FetchProducts.FILTER_CHECK,
  payload
})

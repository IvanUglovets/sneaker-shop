import {FetchProducts} from "../../types/enumFetchProducts";

export interface IProduct{
    title: string
    subTitle: string,
    price: string
    src: string
    id: number
}

export interface IStateProducts{
    isLoading: boolean
    error: string | null
    products: IProduct[]
}

export interface IActionProducts{
    type: string,
    payload?: any
}

export const initialState: IStateProducts = {
    isLoading: false,
    error: null,
    products: []
}

export const fetchProductsReducer = (state = initialState, action: IActionProducts) => {
    switch (action.type){
        case FetchProducts.FETCH_LOADING:
            return {...state, isLoading: true, products: [], error: null}
        case FetchProducts.FETCH_PRODUCTS:
            return {...state, isLoading: false, products: action.payload, error: null}
        case FetchProducts.FETCH_ERROR:
            return {...state, isLoading: false, error: action.payload}
        default: return state;
    }
}

export const fetchLoadingCreator = () => ({
    type: FetchProducts.FETCH_LOADING
})

export const fetchProductsCreator = (payload: IProduct[]) =>({
    type: FetchProducts.FETCH_PRODUCTS,
    payload : payload
})

export const fetchErrorCreator = (message: string) => ({
    type: FetchProducts.FETCH_ERROR,
    payload: message
})

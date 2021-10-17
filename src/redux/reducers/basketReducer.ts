import {IProduct} from "../../types/IProduct";
import {enumBasketItems} from '../../types/enumBasketItems'

interface IActionBasket {
    type: string,
    payload: IProduct

}

interface IStateBasket{
    basketSneakers: IProduct[]
}


const initialState: IStateBasket = {
    basketSneakers: []
}



export const basketReducer = (state = initialState, action: IActionBasket) => {
    switch (action.type){
        case enumBasketItems.ADD_ITEM:
            return {...state, basketSneakers: [...state.basketSneakers, action.payload]}
        default: return state
    }
}



export const addToBasket = (sneaker: IProduct) :IActionBasket => ({
    type: enumBasketItems.ADD_ITEM,
    payload: sneaker
})
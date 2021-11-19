import {IProduct} from "../../types/IProduct";
import {enumBasketItems} from '../../types/enumBasketItems'

interface IActionBasket {
    type: string,
    payload?: any

}

export interface IStateBasket{
    basketSneakers: IProduct[]
}


const initialState: IStateBasket = {
    basketSneakers: []
}



export const basketReducer = (state = initialState, action: IActionBasket) => {
    switch (action.type){
        case enumBasketItems.ADD_ITEM:
            return {...state, basketSneakers: [...state.basketSneakers, action.payload]}
        case enumBasketItems.DELETE_ITEM:
            return {...state, basketSneakers: [...state.basketSneakers.filter((item) => item.id !== action.payload)]}
        case enumBasketItems.DELETE_ALL:
            return {...state, basketSneakers: []}
        case enumBasketItems.ADD_COUNT:
            return {
                ...state,
                basketSneakers: [...state.basketSneakers.map(item => {
                   return item.id === action.payload ? {...item, count: item.count+1} : item
                })]
            }
        case  enumBasketItems.DELETE_COUNT:
            return {
                ...state,
                basketSneakers: [...state.basketSneakers.map(item => {
                    return item.id === action.payload ? {...item, count: item.count-1} : item
                })]
            }
        default: return state
    }
}



export const addToBasket = (sneaker: IProduct) :IActionBasket => ({
    type: enumBasketItems.ADD_ITEM,
    payload: sneaker
})


export const deleteItem = (id: number) :IActionBasket  =>({
    type: enumBasketItems.DELETE_ITEM,
    payload: id
})

export const deleteAllItems = () :IActionBasket => ({
    type: enumBasketItems.DELETE_ALL
})

export const addCount = (id: number) : IActionBasket => ({
    type: enumBasketItems.ADD_COUNT,
    payload: id
})

export const deleteCount = (id: number) : IActionBasket => ({
    type:enumBasketItems.DELETE_COUNT,
    payload: id
})


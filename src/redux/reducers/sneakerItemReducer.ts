import {IProduct} from "../../types/IProduct";

const SET_SNEAKER: string = 'SET_SNEAKER';

interface IStateSneaker{
    sneaker: null | IProduct
}

interface IActionSneaker{
    type: string
    payload: IProduct
}


const initialState: IStateSneaker = {
    sneaker: null
}

export const sneakerItemReducer = (state: IStateSneaker = initialState,action: IActionSneaker) =>{
    switch (action.type){
        case SET_SNEAKER:
            return {
                ...state,
                sneaker: action.payload
            }

        default: return state
    }
}

export const setSneakerItem = (sneaker: IProduct) : IActionSneaker => ({
    type: SET_SNEAKER,
    payload: sneaker
})


const ADD_AMOUNT = 'ADD_AMOUNT'
const DELETE_AMOUNT = 'DELETE_AMOUNT'


interface IStateAmount{
    amount: number
}


interface IActionAmount{
    type: string
    payload?: number
}

const initialState: IStateAmount = {
    amount: 1
}








export const  amountReducer = (state = initialState,action: IActionAmount) => {
    switch (action.type) {
        case ADD_AMOUNT:
            return {
                ...state,
                amount: state.amount + 1
            }
        case DELETE_AMOUNT:
            return {
                ...state,
                amount: state.amount - 1
            }

        default: return state
    }
}


export const incrementAmount = () :IActionAmount=> ({
    type: ADD_AMOUNT
})

export const decrementAmount = () :IActionAmount=> ({
    type: DELETE_AMOUNT
})




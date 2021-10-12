export interface  IProduct{
    img: string
    id: number | string

}

export interface IStateProducts{
    products: IProduct[]
}

export interface IActionProducts{
    type: string,
    payload?: any
}

export const initialState: IStateProducts = {
    products: []
}

export const fetchUsers = (state = initialState,action: IActionProducts) => {
    switch (action.type){


        default: return state;
    }
}
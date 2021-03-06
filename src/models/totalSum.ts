import {IProduct} from "../types/IProduct";

export const totalSum = (items: IProduct[]) => items.reduce((acc:number,total) => acc += +total.price * total.count,0)
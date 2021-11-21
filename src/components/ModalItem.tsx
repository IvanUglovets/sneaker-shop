import React, {FC} from 'react'
import {Card, CardContent, Typography} from "@mui/material";
import {IProduct} from "../types/IProduct";

interface IPropsModalItem{
    item: IProduct
    index: number
}


const ModalItem: FC<IPropsModalItem> = ({item,index} ) => {
    return (
        <Card variant='outlined' sx={{mb: '1rem'}} key={item.id}>
            <CardContent>
                <p>{index+1}) {item.title}</p>
                <Typography variant='body1' component='span' sx={{mr: '1rem'}}>{item.subTitle}</Typography>
                <Typography variant='body1' component='span' sx={{mr: '1rem'}}>x {item.count}</Typography>
                <Typography variant='body1' component='p' color='red'>Цена: {+item.price * item.count} р.</Typography>
            </CardContent>
        </Card>
    )
}

export default ModalItem;
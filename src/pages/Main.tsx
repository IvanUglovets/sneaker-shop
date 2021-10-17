import React, {FC, useEffect} from 'react';
import '../index.scss'
import CardList from "../components/CardList";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../redux/actionCreators/fetchProducts";
import LoadingButton from '@mui/lab/LoadingButton'

const Main: FC = () => {
    const {isLoading} = useSelector((state: any) => state.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <main className="wrapper__main">
            {isLoading ? <LoadingButton loading sx={{padding: "50px"}}>
                Submit
            </LoadingButton> :
                <CardList/>}
        </main>
    );
}

export default Main;
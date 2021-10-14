import React, {FC, useEffect} from "react";
import './index.scss'
import {Route, Switch} from "react-router-dom"
import Main from "./pages/Main";
import Basket from "./pages/Basket";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";

import {fetchProducts} from "./redux/actionCreators/fetchProducts";
import {IStateProducts} from "./redux/reducers/fetchProductsReducer";

const App: FC = () => {
    const dispatch = useDispatch()
    const {isLoading} = useSelector((state:any) => state.products)

    useEffect(() => {
    dispatch(fetchProducts())
    }, [])


    return (
        <main>
            <Header/>
            <Container maxWidth="lg">
                <Switch>
                    <Route path="/" component={Main} exact/>
                    <Route path="/basket" component={Basket} exact/>
                    <Route component={ErrorPage} exact/>
                </Switch>
            </Container>
        </main>
    )
}

export default App;
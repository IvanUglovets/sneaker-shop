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
import {LoadingButton} from "@mui/lab";


const App: FC = () => {
    const {isLoading} = useSelector((state: any) => state.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    return (
        (isLoading ? <LoadingButton/>
                :
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

    )
}

export default App;
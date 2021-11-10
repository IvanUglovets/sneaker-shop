import React, {FC, useEffect} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Main from "./pages/Main";
import Basket from "./pages/Basket";
import Header from "./components/Header";
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./redux/actionCreators/fetchProducts";
import {LoadingButton} from "@mui/lab";
import {RootState} from "./redux/reducers/rootReducer";
import SneakerPage from "./pages/SneakerPage";
import "./index.scss";
import Footer from "./components/Footer";


const App: FC = () => {
    const {isLoading} = useSelector((state: RootState) => state.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return isLoading ? (
        <LoadingButton/>
    ) : (
        <>
            <Header/>
            <main style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                <Container maxWidth="lg" sx={{flex: '1 0 auto'}}>
                    <Switch>
                        <Route path="/" component={Main} exact/>
                        <Route path="/basket" component={Basket} exact/>
                        <Route path="/main/:id" component={SneakerPage} exact/>
                        <Redirect to="/" exact/>
                    </Switch>
                </Container>
                <Footer/>
            </main>
        </>
    );
};

export default App;

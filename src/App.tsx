import React, {FC} from "react";
import './index.scss'
import {Route, Switch} from "react-router-dom"
import Main from "./pages/Main";
import Basket from "./pages/Basket";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import {Container} from "@mui/material";


const App: FC = () => {
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
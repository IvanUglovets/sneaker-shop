import React, {FC} from "react";
import {Route, Switch} from "react-router-dom"
import Main from "./pages/Main";
import Basket from "./pages/Basket";
import ErrorPage from "./pages/ErrorPage";
import {Container} from "@mui/material";
import Header from "./components/Header";

const App: FC = () => {
    return (
        <main>
            <Header />
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
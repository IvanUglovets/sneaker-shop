import React, {FC} from "react"
import "../index.scss"
import {Link} from "react-router-dom"
import {Container, Typography, AppBar, Toolbar} from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const Header: FC = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h4" component="span"
                                sx={{flexGrow: 1, display: "block", fontFamily: 'Architects Daughter'}}>
                        <Link to="/" className="logo__link">Sneaker Shop</Link>
                    </Typography>
                    <Link to="/basket" className="basket__link"><ShoppingBasketIcon/></Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}


export default Header;
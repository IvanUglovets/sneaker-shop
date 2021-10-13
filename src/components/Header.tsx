import React, {FC} from "react"
import "../index.scss"
import {makeStyles} from '@mui/styles';
import {Link} from "react-router-dom"
import {Container, Typography} from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const useStyles = makeStyles({
    header: {
        backgroundColor: "#3456b2",
        padding: "10px 0"
    },
    headerInner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        fontFamily: "'ZCOOL KuaiLe', cursive",
        textDecoration: "none",
        color: "white",
    },
    basketLink: {
        textDecoration: "none",
        color: "white",
    }
});

const Header: FC = () => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Container maxWidth="lg">
                <div className={classes.headerInner}>
                    <Typography variant="h4"><Link className={classes.logo} to='/'>Sneaker Shop</Link></Typography>
                    <nav>
                        <Link className={classes.basketLink} to="/basket"><ShoppingBasketIcon /></Link>
                    </nav>
                </div>
            </Container>
        </header>
    )
}


export default Header;
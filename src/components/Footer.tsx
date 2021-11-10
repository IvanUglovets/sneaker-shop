import React from 'react'
import '../index.scss'
import {Container, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";


const Footer = () => {
    return (
        <footer className='footer'>
            <Container maxWidth='lg'>
                <Toolbar>
                    <div className='footer__wrapper' >
                        <Typography
                            variant="h4"
                            component="span"
                            sx={{
                                flexGrow: 1,
                                display: "block",
                                fontFamily: "Architects Daughter",
                            }}
                        >
                            <Link to="/" className="logo__link">
                                Sneaker Shop
                            </Link>
                        </Typography>

                        <div className='wrapper__links'>
                            <a href='#' className="basket__link" target='_blank' style={{display: 'inline-block', marginRight: '15px'}}>
                                <TelegramIcon/>
                            </a>
                            <a href='#' className="basket__link" target='_blank'>
                                <InstagramIcon/>
                            </a>
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </footer>
    )

}


export default Footer;
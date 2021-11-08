import React, {FC} from 'react'
import '../index.scss'
import {Grid} from "@mui/material";
import ContentSneakerItem from "../components/ContentSneakerItem";


const SneakerPage: FC = () => {
    return (
        <div className="sneaker-page__wrapper">
            <Grid container spacing={2} columns={16} direction='row' justifyContent='space-between'>
                <ContentSneakerItem/>
            </Grid>
        </div>
    )
}

export default SneakerPage;
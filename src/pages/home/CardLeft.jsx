import { Grid } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';


export const CardLeft = ({ img, heading, content }) => {
    return (
        <div className='card-marginT'>
            <div className="cardLeft-desktop" >
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <img src={img} alt="img" width='95%' />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="home-card-data">
                            <div className="home-card-heading">{heading}</div>
                            <div className="home-card-content">{content}</div>
                            <div className="home-card-btnTxt">Explore iVeeW cards <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                        </div>
                    </Grid>
                </Grid >
            </div>
            <div className="cardLeft-mobile">
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <div className="home-card-data">
                            <div className="home-card-heading">{heading}</div>
                            <div className="home-card-content">{content}</div>
                            <div className="home-card-btnTxt">Explore iVeeW cards <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={img} alt="img" width='95%' />
                    </Grid>
                </Grid >
            </div>
        </div>
    )
}

import React from 'react'
import './Message360.css'
import NavBar from '../../components/navbar/Navbar'
import Btn from '../../components/btn/Btn'
import { Grid } from '@mui/material'
import message360img1 from '../../assets/imgs/message360img1.png'

export default function Message360() {

    return (
        <>
            <NavBar />
            {/* section 1  */}
            <section className='message360-hero'>
                <div className="message360-hero-contentBox">
                    <div className="message360-hero-heading">Message <br /> 360</div>
                    <div className="message360-hero-content">The value of adding messaging to your business lies in improved communication, customer engagement, and revenue generation. Messaging apps offer a convenient and efficient way to interact with customers, leading to increased customer loyalty and satisfaction. Recently study reflects 75% SMS adoption.</div>
                    <div className="geoFence-hero-btns">
                        <Btn label='Get Started' />
                        <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                    </div>
                </div>
            </section>
            {/* section 2  */}
            <section className="padding">
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="message360ImgPadding">
                            <img src={message360img1} alt="img" />
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="message360-heading1 mb-30">Message 360</div>
                        <div className="message360-text1">Messaging customers value quick, direct communication, leading to increased loyalty and satisfaction. According to a Podium report, 90% of consumers prefer interacting with brands via text message.
                            <br /> <br />
                            With 86% feeling more positive about a brand after a messaging experience.  If message is contextual, it increases the conversion rate.
                        </div>
                    </Grid>
                </Grid>
            </section>
            {/* section 3  */}
            <section className="padding">
                <div className="global-heading1">What does message-360 <br /> does?</div>
            </section>

        </>

    )
}

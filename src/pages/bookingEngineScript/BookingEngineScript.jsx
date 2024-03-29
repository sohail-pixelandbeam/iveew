import React, { useEffect } from 'react'
import './BookingEngineScript.css'
import guestRecImg2 from '../../assets/imgs/guestRecImg2.png'
import guestRecImg4 from '../../assets/imgs/guestRecImg4.png'
import bookEngImg2 from '../../assets/imgs/bookEngImg2.png'
import bookEngImg3 from '../../assets/imgs/bookEngImg3.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import SliderCustom from '../../components/sliderCustom/SliderCustom'


export default function BookingEngineScript() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar hideModal={true} />
            <div className="bookEng-hero">
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="spMsg-hero-contentBox">
                                <div className="spMsg-hero-heading ">Our <br /> patented <br /> guest recognition</div>
                                <div className="spMsg-hero-btns">
                                    <Btn label='Get Started' />
                                    <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                <div className="global-heading1 mb-8per mt-8per">Select the booking engine for <br /> mobile hotels.
                </div>
                {/* 1st  */}
                <div className='mb-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding message360-desktopImg">
                                <img src={bookEngImg2} alt="img" />
                            </div>
                        </Grid>
                        <Grid xs={1}></Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding bookEng-sec2-topMargin">
                                <div className="message360-heading1 mb-40 mt-8per">Booking engine script</div>
                                <div className="spMsg-text1 mb-40">
                                    Using our connection via your IBE linked to PMS creates a seamless connection with the guest and saves them from printing their email confirmation.
                                </div>
                            </div>
                        </Grid>
                        {window.innerWidth <= 700 && <Grid item sm={6} xs={12}>
                            <div className="message360Padding ">
                                <img src={bookEngImg2} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
                {/* 2nd  */}
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding ">
                                <div className="message360-heading1 mb-40 mt-8per">Know more about us</div>
                                <div className="spMsg-text1 mb-40">
                                    Once a guest has the confirmation screen, there is a box to save to mobile phone. A window pops up to collect the mobile # and submit it.  The guest receives a hyperlink via SMS, to open and save to mobile wallet.
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={bookEngImg3} alt="img" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="spMsg-bgBox">
                    <div className="home-sec7-heading">Looking for more global features?</div>
                    <div className="home-sec7-content">Check out our enterprise solution — it has everything you need to manage multi-entity travel, expenses, and procurement <br />
                        in real time, on one platform, around the world.</div>
                    <Btn label="Explore our global enterprise solution" className='home-sec7-btn' />
                </div>
            </section>
            <div className="mb-8per">
                <SliderCustom />

            </div>
            <Footer />
        </>
    )
}

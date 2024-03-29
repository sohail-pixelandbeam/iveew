import React, { useEffect } from 'react'
import './MessageMarketSegmentation.css'
import guestRecImg2 from '../../assets/imgs/guestRecImg2.png'
import guestRecImg4 from '../../assets/imgs/guestRecImg4.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import SliderCustom from '../../components/sliderCustom/SliderCustom'
import repMgtImg2 from '../../assets/imgs/repMgtImg2.png'
import repMgtImg3 from '../../assets/imgs/repMgtImg3.png'


export default function MessageMarketSegmentation() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar hideModal={true} />
            <div className="repMgt-hero" >
                <div style={{ textAlign: 'center' }}>
                    <div className="spMsg-hero-contentBox">
                        <div className="spMsg-hero-heading ">Discover our reputation  <br /> management</div>
                        <div className="spMsg-hero-btns" style={{ justifyContent: 'center' }}>
                            <Btn label='Get Started' />
                            <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                <div className="global-heading1 mb-8per mt-8per">Learn more about reputation <br /> management</div>
                {/* 1st  */}
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding message360-desktopImg">
                                <img src={guestRecImg2} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">

                                <div className="message360-heading1 mb-40">Reputation management</div>
                                <div className="spMsg-text1 mb-40">
                                    Reputation management is the practice of influencing stakeholder perceptions and public conversations about an organization and its brands. It includes monitoring perceptions and proactively seizing opportunities to boost reputation.
                                </div>
                            </div>
                        </Grid>
                        {window.innerWidth <= 700 && <Grid item sm={6} xs={12}>
                            <div className="message360Padding ">
                                <img src={guestRecImg2} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
                {/* 2nd  */}
                <div className='mt-8per'>
                    <Grid container spacing={5}>
                        <Grid item sm={5.5} xs={12}>
                            <div className="message360Padding mt-40">
                                <div className="message360-heading1 mb-40">Organizational strategy</div>
                                <div className="spMsg-text1 mb-40">
                                    Reputation management is part of a comprehensive organizational strategy that implicates most business functions in some capacity, including communications, marketing, legal, customer experience, and sales and loyalty.
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding ">
                                <img src={repMgtImg2} alt="img" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </section>
            {/* section 3  */}
            <section className="padding">
                <div className="global-heading1 mb-8per ">Messages that can be sent out after</div>
                {/* 1st  */}
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding message360-desktopImg">
                                <img src={repMgtImg3} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">

                                <div className="message360-heading1 mb-40">In Hospitatility</div>
                                <div className="spMsg-text1 mb-40">
                                    <div className='repMgt-list'>
                                        • Check-in
                                        <br /><br />
                                        • Room service
                                        <br /><br />
                                        • Housekeeping
                                        <br /><br />
                                        • Restaurant
                                        <br /><br />
                                        • Valet
                                        <br /><br />
                                        • Spa
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        {window.innerWidth <= 700 && <Grid item sm={6} xs={12}>
                            <div className="message360Padding ">
                                <img src={repMgtImg3} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
                <div className="spMsg-bgBox">
                    <div className="home-sec7-heading">Looking for more global features?</div>
                    <div className="home-sec7-content">Check out our enterprise solution — it has everything you need to manage multi-entity travel, expenses, and procurement <br />
                        in real time, on one platform, around the world.</div>
                    <Btn label="Explore our global enterprise solution" className='home-sec7-btn' />
                </div>
            </section>


            <Footer />
        </>
    )
}

import React, { useEffect } from 'react'
import spMsgImg1 from '../../assets/imgs/spMsgImg1.png'
import spMsgImg2 from '../../assets/imgs/spMsgImg2.png'
import spMsgImg3 from '../../assets/imgs/spMsgImg3.png'
import spMsgImg4 from '../../assets/imgs/spMsgImg4.png'
import spMsgImg5 from '../../assets/imgs/spMsgImg5.png'
import repImg1 from '../../assets/imgs/repImg1.png'
import repImg2 from '../../assets/imgs/repImg2.png'
import repImg3 from '../../assets/imgs/repImg3.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import EastIcon from '@mui/icons-material/East';
import Footer from '../../components/footer/Footer'
import SliderCustom from '../../components/sliderCustom/SliderCustom'


export default function Reputation() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <NavBar hideModal={true} />
            <div className="spMsg-hero" style={{ background: '#111111' }}>
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="spMsg-hero-contentBox">
                                <div className="spMsg-hero-heading ">The future of <br /> reputation <br /> management  </div>
                                <div className="spMsg-hero-btns ">
                                    <Btn label='Get Started' />
                                    <Btn label="Open an account" className='geoFence-hero-btn' style={{ padding: '0px 45px' }} />
                                </div>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <img src={repImg1} alt="img" width='100%' />
                        </Grid>
                    </Grid>
                </div>
            </div>
            {/* section 2  */}
            <section className="padding" style={{ paddingTop: '2%' }}>
                {/* 1st  */}
                <div className="mb-8per mt-8per">
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding message360-desktopImg">
                                <img src={repImg2} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={7} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-heading1 mb-40">Reputation management</div>
                                <div className="spMsg-text1 mb-40">
                                    Reputation management is the practice of influencing stakeholder perceptions and public conversations about an  organization and its brands. It includes monitoring perceptions and conversations, responding to reputation threats, and  proactively seizing opportunities to boost reputation
                                    <br /><br />
                                    Reputation management is part of a comprehensive organizational strategy that implicates most business functions in some  capacity, including communications, marketing, legal, customer experience, and sales and loyalty.
                                </div>
                                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </div>
                        </Grid>
                        {window.innerWidth <= 700 && <Grid item sm={6} xs={12}>
                            <div className="message360Padding ">
                                <img src={repImg2} alt="img" />
                            </div>
                        </Grid>}
                    </Grid>
                </div>
                {/* 2nd  */}
                <div >
                    <Grid container spacing={5}>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <div className="message360-heading1 spMsgcontentTopMargin mb-40">Online reputation improvement</div>
                                <div className="spMsg-text1 mb-40">
                                    Directful empowers hoteliers to actively manage their online reputation takeholder perceptions and public conversations about an  organization and its brands. It includes monitoring perceptions and conversations, responding to reputation threats, and  proactively seizing opportunities to boost reputation
                                </div>
                                <div className="home-card-btnTxt mb-30">Learn more about us <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <div className="message360Padding">
                                <img src={repImg3} alt="img" width='90%' />
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
            <Footer />
        </>
    )
}

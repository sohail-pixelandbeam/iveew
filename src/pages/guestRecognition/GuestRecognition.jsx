import React, { useEffect } from 'react'
import './GuestRecognition.css'
import guestRecImg1 from '../../assets/imgs/guestRecImg1.png'
import guestRecImg2 from '../../assets/imgs/guestRecImg2.png'
import guestRecImg3 from '../../assets/imgs/guestRecImg3.png'
import guestRecImg4 from '../../assets/imgs/guestRecImg4.png'
import spMsgImg1 from '../../assets/imgs/spMsgImg1.png'
import spMsgImg2 from '../../assets/imgs/spMsgImg2.png'
import spMsgImg3 from '../../assets/imgs/spMsgImg3.png'
import spMsgImg4 from '../../assets/imgs/spMsgImg4.png'
import spMsgImg5 from '../../assets/imgs/spMsgImg5.png'
import { Grid } from '@mui/material'
import Btn from '../../components/btn/Btn'
import NavBar from '../../components/navbar/Navbar'
import EastIcon from '@mui/icons-material/East';
import Footer from '../../components/footer/Footer'
import SliderCustom from '../../components/sliderCustom/SliderCustom'


export default function GuestRecognition() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <NavBar hideModal={true} />
            <div className="guestRec-hero">
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
                <div className="global-heading1 mb-8per mt-8per">Learn more about guest recognition</div>
                {/* 1st  */}
                <div>
                    <Grid container spacing={5}>
                        <Grid item sm={5} xs={12}>
                            <div className="message360Padding message360-desktopImg">
                                <img src={guestRecImg2} alt="img" />
                            </div>
                        </Grid>
                        <Grid item sm={7} xs={12}>
                            <div className="message360Padding">

                                <div className="message360-heading1 mb-40">Guest recognition</div>
                                <div className="spMsg-text1 mb-40">
                                    Our patented guest recognition application allows hotels and businesses to recognize guests and customers when approaching the hotel or entering a store.  Geofencing and beacons allow hotels and businesses to recognize guests and customers.
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
            </section>
            {/* section 3  */}
            <section className='mb-8per'>
                <div className='guestRec-bgSec'>
                    <div className='guestRec-bgSec-left'>
                        <h1>Unveiling recognition: <br />
                            Your Path to <br />
                            success, Guided by <br /> Experts</h1>
                        <div className="spMsg-hero-btns" style={{marginTop:'30px'}}>
                           
                                <Btn label='Get Started' />
                                <Btn label="Watch Video" style={{ color: 'black', border: '2px solid black', background: 'transparent' }} />
                            
                        </div>
                    </div>
                    <img src={guestRecImg4} alt="img" />
                </div>
            </section>
            <SliderCustom />
            <section className="spMsg-padding">
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

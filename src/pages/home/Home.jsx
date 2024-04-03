import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import Btn from '../../components/btn/Btn';
import imgWatch from '../../assets/imgs/imgWatch.png'
import img9 from '../../assets/imgs/img9.png';
import img10 from '../../assets/imgs/img10.png';
import img11 from '../../assets/imgs/img11.png';
import img12 from '../../assets/imgs/img12.png';
import img13 from '../../assets/imgs/img13.png';
import img14 from '../../assets/imgs/img14.png';
import img15 from '../../assets/imgs/img15.png';
import img16 from '../../assets/imgs/img16.png';
import affImg1 from '../../assets/imgs/affImg1.png'
import affImg2 from '../../assets/imgs/affImg2.png'
import affImg3 from '../../assets/imgs/affImg3.png'
import { CardLeft } from './CardLeft';
import { CardRight } from './CardRight';
import EastIcon from '@mui/icons-material/East';
import PricingCard from './PricingCard';
import Footer from '../../components/footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCustom2 from '../../components/sliderCustom2/SliderCustom2';
import FullScreenVideo from '../../components/fullScreenVideo/FullScreenVideo';
import SliderCustom from '../../components/sliderCustom/SliderCustom'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    let [hideModal, setHideModal] = useState(true);
    const navigate = useNavigate()
    const pricingData = [
        {
            heading: "SMB-Essentials",
            explanation: "Per Location",
            price: "$350/month per location",
            btnLabel: "Set-up account to get started",
            features: ['Messaging','Market Segmentation', 'Personalization', 'Reputation Management','Booking/Purchase Confirmation', 'Chatbot AI', 'QR Platform (20 Codes)'],
            specialNote:'Select 4'
        },
        {
            heading: "SME-Premium",
            explanation: "Per Location",
            price: "$450/month per location",
            btnLabel: "Contact sales",
            features: ['Customer Recognition', 'Blast-M','Message-360','Loyality Integration', 'Geofencing', 'Voucher & Gift Cards'],
            specialNote: 'Select 4',
        },
        {
            heading: "Enterprise",
            explanation: "Per Location",
            price: "$700/month per location",
            btnLabel: "Contact sales",
            features: ['Inspirations','Asset Tracking','RFID (100 tags)','QR Platform (100 Codes)'],
            specialNote: 'All Platforms',
        },
    ]
 
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleThumbnailClick = () => {
        setIsVideoPlaying(true);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <NavBar hideModal={hideModal} />
            <div onMouseEnter={() => setHideModal(!hideModal)}>
                {/* section 1 banner section  */}
                <section className='home-banner-box'>
                    <Grid container spacing={5}>
                        <Grid item sm={6} >
                            <div className="home-banner-heading">
                                The AI Powered Tools <br className='desktop'/>
                                To Connect Customers <br />
                                And Guests
                            </div>
                            <div className="home-banner-content">
                                This is dummy text which is used to inesses involves using location-based technology to create virtual boundaries around a physical location, such as a hotel, to trigger personalized interactions with guests. This technology allows hotels to offer tailored services and promotions based on a guest's location .
                            </div>
                            <Btn label='Get Started' />
                        </Grid>
                        <Grid item sm={6} >
                            
                        </Grid>
                    </Grid>
                </section>
                {/* section 2  */}
                <section className='home-sec2-box padding'>
                    <div className="global-heading1" >Empower customers or guests to receive   <br />personalized offers that relate to them the most</div>
                    <div className="home-sec2-text">Trusted Customers</div>
                    <div className='home-sec2-imgs' >
                        <Grid container spacing={2}>
                            <Grid item sm={4} xs={12}>
                                <img className='home-sec-2-img' src={affImg1} alt="companies" />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <img className='home-sec-2-img' src={affImg2} alt="companies" />
                            </Grid>
                            <Grid item sm={4} xs={12}>
                                <img className='home-sec-2-img' src={affImg3} alt="companies" />
                            </Grid>
                        </Grid>
                    </div>
                    {/* section 2 watch */}
                    <div className='home-sec2-watch-main' >
                        <div className="home-sec2-watch-box">
                            <Grid container spacing={5}>
                                <Grid item md={6.5} xs={12}>
                                    <div className="home-watch-heading">Guest Recognition</div>
                                    <div className="home-watch-content">
                                        Our patented guest recognition application allows hotels and businesses to recognize guests and customers when approaching the hotel or entering a store. Geofencing and beacons allow hotels and businesses to see guests go through virtual geofence.Greeting by their name, recognizing them in the lobby, front desk, restaurant or spa by using Beacons and Ultra WideBands.
                                    </div>
                                </Grid>
                                <Grid item sm={4} xs={12}>
                                    <div className="home-watch-img1">
                                        {isVideoPlaying ? (
                                            <FullScreenVideo isVideoPlaying={isVideoPlaying} setIsVideoPlaying={setIsVideoPlaying} />
                                        ) : (
                                            <img src={imgWatch} alt="Thumbnail" onClick={handleThumbnailClick} />
                                        )}
                                    </div>
                                    {/* <img src={imgWatch} alt="imgWatch" className='home-watch-img1' /> */}
                                </Grid>
                            </Grid>
                        </div>
                        <div className="home-sec2-video-box">
                            <Grid container spacing={5}>
                                <Grid item md={7} xs={12}>
                                </Grid>
                                <Grid item md={5} xs={12}>
                                    <div className="home-watch-img">
                                        {isVideoPlaying ? (
                                            <FullScreenVideo isVideoPlaying={isVideoPlaying} setIsVideoPlaying={setIsVideoPlaying} />
                                        ) : (
                                            <img src={imgWatch} alt="Thumbnail" onClick={handleThumbnailClick} />
                                        )}
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <div>
                    </div>
                </section>

                {/* section 3  */}
        
                <SliderCustom2/>
               
                {/* section 5  */}
                <section className="home-sec5-box padding">
                    <div className="global-heading1">Give your resources team <br /> superpowers</div>
                    <div className="global-text1 home-sec2-content">Maximize every resource with AI-powered controls, payments, and accounting.</div>
                    <div className="sec5-cards-box">
                        <CardLeft
                            img={img9}
                            heading="RFID software revolutionizes "
                            content="Set budgets and allocate spend limits with auto-enforced 
                    controls that empower employees to spend wisely. Track and 
                    adjust in real time to keep everyone on budget and maximize 
                    impact."
                        />
                        <CardRight
                            img={img10}
                            heading="QRMAJI Delivers codes"
                            content="Make expenses a breeze for employees and managers with automated receipts, an AI-powered expense assistant, in-app travel bookings and itinerary changes. All in a five-star mobile app."
                        />
                        <CardLeft
                            img={img11}
                            heading="Beacons, wifi, mesh, 5.0"
                            content="Set budgets and allocate spend limits with auto-enforced 
                    controls that empower employees to spend wisely. Track and 
                    adjust in real time to keep everyone on budget and maximize 
                    impact."
                        />
                        <CardRight
                            img={img12}
                            heading="Geofencing your property"
                            content="Make expenses a breeze for employees and managers with automated receipts, an AI-powered expense assistant, in-app travel bookings and itinerary changes. All in a five-star mobile app."
                        />
                        <CardLeft
                            img={img13}
                            heading="GX-Guest management"
                            content="Set budgets and allocate spend limits with auto-enforced controls that empower employees to spend wisely. Track and adjust in real time to keep everyone on budget and maximize impact."
                        />
                        <CardRight
                            img={img14}
                            heading="Segmentation marketing"
                            content="Make expenses a breeze for employees and managers with automated receipts, an AI-powered expense assistant, in-app travel bookings and itinerary changes. All in a five-star mobile app."
                        />
                    </div>
                    <div className='sec5-author-text-box'>
                        <Grid container spacing={5} >
                            <Grid item sm={5} xs={12} >
                                <img src={img15} alt="img" className='home-sec5-author-img'/>
                            </Grid>
                            <Grid item sm={6} xs={12} >
                                <img src={img16} alt="img" width='250px' />
                                <div className="home-sec5-author-text">
                                    “iVeeW has been a major gain for us in efficiency for T&E. It’s easy for employees to understand where and how to spend.”
                                </div>
                                <div className="home-sec5-author-name">— Mike Kim, Vice President of Finance, DoorDash</div>
                                <div className="home-card-btnTxt">Read the case study <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* section 6  */}
                <section className="home-sec6-box">
                    <div className="padding">
                        <Grid container>
                            <Grid item sm={5} xs={12}>
                                <div className="home-sec6-heading">The AI Powered tools  to connect customers  and <br /> guests</div>
                                <div className="home-sec6-content">Learn how our spend platform can increase teh strategic impact of your finance team and future-proof your company.</div>
                                <Btn label='Get Started' />
                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* section 7  */}
                <section>
                    <div className="home-sec7-box padding">
                        <div className="global-heading1">Everything you need to <br /> spend smart.</div>
                        <div className='margin-home'>
                            <Grid container spacing={5}>
                                {
                                    pricingData.map(item => (
                                        <Grid item md={4} sm={6} xs={12}
                                            key={item.heading}>
                                            <PricingCard
                                                onClick={()=>navigate('/Pricing')}
                                                heading={item.heading}
                                                features={item.features}
                                                btnLabel={item.btnLabel}
                                                note={item?.specialNote}
                                                price={item.price}
                                                explanation={item.explanation}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div>
                        <div className="home-sec7-bgBox">
                            <div className="home-sec7-heading">Looking for more global features?</div>
                            <div className="home-sec7-content">Check out our enterprise solution — it has everything you need to manage multi-entity travel, expenses, and procurement <br />
                                in real time, on one platform, around the world.</div>
                            <Btn label="Explore our global enterprise solution" className='home-sec7-btn' />
                        </div>
                    </div>
                </section>
                {/* section 8  */}
                {/* section 8  */}
                <SliderCustom/>
                {/* Footer  */}
                <Footer />
            </div>
        </>
    )
}

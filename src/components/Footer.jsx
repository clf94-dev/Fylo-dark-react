import React from 'react'
import {Grid} from '@material-ui/core';
import Logo from './images/logo.svg';
import Phone from './images/icon-phone.svg'
import Email from './images/icon-email.svg'
import Location from './images/icon-location.svg'

import './styles/App.css'

function Footer() {
    return (
        <div>
            <Grid container className='footer-cont'>
                <img className='footer-logo' src={Logo} alt="logo"/>
                <Grid container direction='row'>
                    <Grid item md={4} xs={12}>
                        <img className='location-logo'src={Location} alt="location"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua</p>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Grid container direction='row' className='footer-links contact-row'>
                            <Grid item xs={2}>
                                <img src={Phone} alt="phone"/>
                            </Grid>
                            <Grid item xs={10}>
                                <h6 className='contact-info'>+1-543-123-4567</h6>
                            </Grid>
                        </Grid>
                        <Grid container direction='row' className='footer-links contact-row'>
                            <Grid item xs={2}>
                                <img src={Email} alt="email"/>
                            </Grid>
                            <Grid item xs={10}>
                                <h6 className='contact-info'>example@fylo.com</h6>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item md={1} xs={12} direction='column'>
                        <h6 className='footer-links links'>About Us</h6>
                        <h6 className='footer-links links'>Jobs</h6>
                        <h6 className='footer-links links'>Press</h6>
                        <h6 className='footer-links links'>Blog</h6>
                    </Grid>
                    <Grid item md={1} xs={12}>
                        <h6 className='footer-links links'>Contact Us</h6>
                        <h6 className='footer-links links'>Terms</h6>
                        <h6 className='footer-links links'>Privacy</h6>
                    </Grid>
                    <Grid item md={3} xs={12} className='footer-links'>
                        <i className='fab fa-2x fa-facebook'></i>
                        <i className='fab fa-2x fa-twitter'></i>
                        <i className='fab fa-2x fa-instagram'></i>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;

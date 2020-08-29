import React from 'react'
import {Grid} from '@material-ui/core'
import MiddleImg from './images/illustration-stay-productive.png'
import Arrow from './images/icon-arrow.svg'
import './styles/App.css'

function Middle() {
    return (
        <div>
            <Grid container direction='row' className='middle-cont'>
                <Grid item md={6} xs={12} className='img-col'>
                    <img src={MiddleImg} alt="Stay productive"/>
                </Grid>
                <Grid item md={6} xs={12} className='text-col'>
                    <h2>Stay productive, wherever you are</h2>
                    <p>Never let location be an issue when accessing your files. Fylo has you
                        covered for all of your file storage needs.</p>
                    <p>Securely share files and folders with friends, family and colleagues for live
                        collaboration. No email attachments required.</p>
                    <a href="">See how Fylo works
                        <img src={Arrow} alt="Arrow"/></a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Middle

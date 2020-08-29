import React from 'react'
import {Grid, Button} from '@material-ui/core/'
import TopImg from './images/illustration-intro.png';
import './styles/App.css'


function Top() {
    return (
        <div>
            <Grid container direction='column' className='top-cont'>
                <img src={TopImg} alt="All your files"/>
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them
                    wherever you need, share and collaborate with friends family, and co-workers.</p>
                <Button>Get Started</Button>
            </Grid>

        </div>
    )
}

export default Top

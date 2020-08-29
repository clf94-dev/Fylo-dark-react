import React from 'react'
import {Grid} from '@material-ui/core'

import Profile1 from './images/profile-1.jpg'
import Profile2 from './images/profile-2.jpg'
import Profile3 from './images/profile-3.jpg'


function TestimonialCard(props) {
    const ProfilePics =[Profile1, Profile2, Profile3];
    return (
        <div>
            <Grid container  className='card-test-cont'>
                <p className='testimonial-text'>{props.text}</p>
                <Grid container direction='row' className='person-info'>
                    <Grid item xs={2}>
                        <img src={ProfilePics[props.index]} alt="profile picture "/>

                    </Grid>
                    <Grid item xs={10}>
                       
                        <h4>{props.name}</h4>
                        <h6>{props.position}</h6>

                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}

export default TestimonialCard;

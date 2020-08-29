import React from 'react'
import testimonials from './testimonials.js'
import TestimonialCard from './TestimonialCard'
import {Grid} from '@material-ui/core'
import './styles/App.css'

import Quotes from './images/bg-quotes.png'

function Testimonials() {
    return (
        <div>
            <div className="testimonial-cont">
                <img className='quotes' src={Quotes} alt="quotes"/>
                <Grid container direction='row'>
                    {testimonials.map((testimonial) => {
                        return ( 
                        < Grid item md={4} xs={12} spacing={3} className='card-col'> 
                        <TestimonialCard
                            text={testimonial.text}
                            name={testimonial.name}
                            position={testimonial.position}
                            index={testimonial.imgIndex}
                            key={testimonial.key}/> 
                            
                            </Grid>);
                    }
                    )}

                </Grid>
            </div>
        </div>
    )
}

export default Testimonials;

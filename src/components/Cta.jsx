import React from 'react'
import {Button, Grid} from '@material-ui/core'

function Cta() {
    return (
        <div>
            <Grid container className='cta-section'>
                <Grid container direction='column' className='cta-cont'>
                    <h3>Get early access today</h3>
                    <p>It only takes a minute to sign up and our free starter tier is extremely
                        generous. If you have any questions, our support team would be happy to help
                        you.</p>

                    <Grid container direction='row'>
                        <Grid item md={8} xs={12}>
                            <input type="text" placeholder='email@example.com'/>
                        </Grid>

                        <Grid item md={4} xs={12}>
                            <Button>Get Started For Free</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cta;

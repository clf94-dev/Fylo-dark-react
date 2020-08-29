import React from 'react'
import {Grid} from '@material-ui/core'
import Anywhere from './images/icon-access-anywhere.svg'
import Security from './images/icon-security.svg'
import Collaboration from './images/icon-collaboration.svg'
import AnyType from './images/icon-any-file.svg'

import './styles/App.css'


function CardFeat(props) {
const featImg = [Anywhere, Security, Collaboration,AnyType ]

    return (
        <div>

            <Grid container direction='column'spacing={3} className='card-cont' >
         
                    <img src={featImg[props.imgIndex]} alt={props.imgALT}/>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>

                </Grid>
            

        </div>
    )
}

export default CardFeat;

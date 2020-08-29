import React from 'react'
import CardFeat from './CardFeat'
import features from './features.js'
import { Grid } from '@material-ui/core'

function createFeatCard(feature){
    return(
        <CardFeat title={feature.title} text={feature.text} key={feature.key} imgALT={feature.imgALT} imgIndex={feature.imgINDEX}/>
    )
}


function Features() {


    return (
        <div>
            <div className="features-cont">
                <Grid container direction={'row'} spacing={3}>
                   {features.map(createFeatCard)}  
              </Grid>
            </div>
        </div>
    )
}

export default Features;

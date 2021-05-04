import React from 'react'

//Import needed components
import { Carousel } from 'react-responsive-carousel';
import { makeStyles, Container } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Images } from '../../data/images';

import Page from 'material-ui-shell/lib/containers/Page'
import { useIntl } from 'react-intl'
import CircularProgress from '@material-ui/core/CircularProgress'
import SettingsIcon from '@material-ui/icons/Settings';
import usePageContentStyles from '../../assets/styles/usePageContentStyles';


const StoryCarousel = () => {

    const intl = useIntl()
    const classes = usePageContentStyles();
     
    const onChange = (e) => {

        console.log('onChange: ',e);

    }

    const onClickItem = (e) => {
        console.log('onClickItem: ',e);

    }

    const onClickThumb = (e) => {
        console.log('onClickThumb: ',e);

    }


    return (

     <Page
         pageTitle={
             intl.formatMessage({ 
                id: 'game', 
                defaultMessage: 'Juego ejemplo'
          })}
          appBarContent = {<SettingsIcon/>}

     >
        <Container   className={classes.root}>
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>

                {Images.map((item, index) => (

                    <div key={index} className={classes.container}>
                        <img alt={item.legend} src={item.data} className={classes.img}/>
                        {/* <p className="legend">{item.legend}</p> */}
                    </div>
                ))        
                }
            </Carousel>
        </Container>
    </Page>
              
       )
}

export default StoryCarousel;


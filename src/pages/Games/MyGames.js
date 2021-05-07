import React from 'react'
import Page from 'material-ui-shell/lib/containers/Page'
import { useIntl } from 'react-intl'
import usePageContentStyles from '../../assets/styles/usePageContentStyles';
import { Container } from '@material-ui/core';
import GamesIcon from '@material-ui/icons/Games';

const MyGames = () => {
   const intl = useIntl()
    const classes = usePageContentStyles()
    return (
    <>
        <Page
         pageTitle={
             intl.formatMessage({ 
                id: 'my_game', 
                defaultMessage: 'Mis Juego'
          })}
          appBarContent = {<GamesIcon />}

     >
        <Container   className={classes.root}>

                <h1>MIS JUEGOS</h1>

        </Container>
    </Page>   
    </>
    )
}

export default MyGames
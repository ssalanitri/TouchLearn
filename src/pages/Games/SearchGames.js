import React from 'react'
import Page from 'material-ui-shell/lib/containers/Page'
import { useIntl } from 'react-intl'
import usePageContentStyles from '../../assets/styles/usePageContentStyles';
import { Container } from '@material-ui/core';
import GamesIcon from '@material-ui/icons/Games';


const SearchGames = () => {
    const intl = useIntl()
    const classes = usePageContentStyles()
    return (
    <>
        <Page
         pageTitle={
             intl.formatMessage({ 
                id: 'create_game', 
                defaultMessage: 'Crear Juego'
          })}
          appBarContent = {<GamesIcon />}

     >
        <Container   className={classes.root}>

                <h1>BUSCAR JUEGOS</h1>

        </Container>
    </Page>   
    </>
    )
}

export default SearchGames
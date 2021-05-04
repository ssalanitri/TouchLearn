import React from 'react'
import Page from 'material-ui-shell/lib/containers/Page'
import { useIntl } from 'react-intl'
import CircularProgress from '@material-ui/core/CircularProgress'
import SettingsIcon from '@material-ui/icons/Settings';
import useStyles from '../../assets/styles/usePageContentStyles';

const CreateGame = () => {
    return (
    <>
        <Page
         pageTitle={
             intl.formatMessage({ 
                id: 'create_game', 
                defaultMessage: 'Crear Juego'
          })}
          appBarContent = {<SettingsIcon/>}

     >
        <Container   className={classes.root}>

                <h1>CREAR JUEGO</h1>

        </Container>
    </Page>   
    </>
    )
}

export default CreateGame
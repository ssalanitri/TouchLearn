import React, { useState } from 'react'


import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  TrackChanges,
  FileCopy } from '@material-ui/icons';
import {
  Tooltip,
  Typography,
  Card,
  CardContent,
  IconButton,
  Button } from '@material-ui/core'
import {
  withStyles,
  lighten,
  darken } from '@material-ui/core/styles'

  const LightTooltip = withStyles((theme) => {
  const getBackgroundColor = theme.palette.type === 'light' ? lighten : darken;
  return {
tooltip: {
  ...theme.typography.body2,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  padding: '6px 10px',
  backgroundColor: getBackgroundColor(theme.palette.success.main, 0.1),
}
}})(Tooltip);

const PackageCard = ({ title, command, description, icons }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card elevation={4} style={{ margin: 18, maxWidth: 350 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {title}
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#F3F4F4',
            padding: 8,
          }}
        >
          <Typography
            gutterBottom
            variant="body1"
            color="textSecondary"
            component="h2"
          >
            {command}
          </Typography>
          {/* <Tooltip */}
          {/* <LightTooltip
            title={
            <Button
              color='inherit'
              startIcon={<CheckCircleOutlineIcon />}
            >
              Copied to clipboard!
            </Button>
            }
            placement="bottom"
            open={open}
            leaveDelay={1000}
            onClose={handleClose} >
          <IconButton
            aria-label="Icon button"
            onClick={() => {
              if (window.clipboardData) {
                // Internet Explorer
                window.clipboardData.setData('Text', command)
              } else {
                try {
                  navigator.clipboard.writeText(command)
                } catch (error) {}
              }
              handleClick()
            }}
          >
            <FileCopy />
          </IconButton>
          </LightTooltip> */}
        </div>
        <br />
        {icons}
        <br />
        <Typography variant="body2" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

const PageContent = ({ setComponents }) => {
  return (
    <>
      <div style={{ height: 20 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Una forma diferente de enseñar
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
       Elegir entre las opciones que mejores se adapten a su alumno.
       Se pueden crear nuevas segun las necesidades especiales.
      </Typography>
      <div style={{ height: 30 }} />

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <PackageCard
          title={'Relatos con imagenes'}
          command={'TODO: Links a pagina tutorial'}
          description={
            'Mediante un conjunto de imagenes y texto ayudar al alumno a comprender y aprender'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src={'../../assets/img/landing/avatar.png'}
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
            </div>
          }
        />
        <PackageCard
          title={'Seleccion de palabras'}
          command={'TODO: Links a pagina tutorial'}
          description={
            'Elegir entre dos o mas palabras, ordenarlas, escucharlas...'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src={'../../assets/img/landing/avatar2.png'}
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              <img src="material-ui.png" alt="react" style={{ width: 50 }} />
            </div>
          }
        />
        <PackageCard
          title={'Letras y silabas'}
          command={'TODO: Links a pagina tutorial'}
          description={
            'Mediante juegos enseñar letrar y silabas y sus sonidos'
          }
          icons={
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <img
                src={'../../assets/img/landing/avatar3.png'}
                alt="react"
                style={{ width: 50, aspectRatio: 1.11 }}
              />
              <img src="material-ui.png" alt="react" style={{ width: 50 }} />
              <img src="firebase.png" alt="react" style={{ width: 50 }} />
            </div>
          }
        />
      </div>
      <div style={{ height: 30 }} />
      <div
        ref={(r) => {
          if (r) {
            setComponents(r)
          }
        }}
        style={{
          //height: 400,
          backgroundColor: '#2D2D2D',
          backgroundImage: 'radial-gradient( #4F4F4F,#242424)',
        }}
      >
        <div style={{ height: 30 }} />
        <Typography
          variant="h3"
          //color="textSecondary"
          style={{ margin: 16, textAlign: 'center', color: 'white' }}
        >
          Mas informacion
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
          Et clita interesset quo. 

        </Typography>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <TrackChanges style={{ fontSize: 150, color: 'white' }} />
        </div>
        <Typography
          variant="h5"
          component="div"
          style={{ margin: 16, textAlign: 'center', color: 'grey' }}
        >
         Vivendum intellegat et qui, ei denique consequuntur vix. Scripta periculis ei eam, te pro movet reformidans.

        </Typography>
        <div style={{ height: 50 }} />
      </div>

      <div style={{ height: 30 }} />
      <Typography
        variant="h3"
        //color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Buscando lo mejor para enseñara a aprender
      </Typography>
      <Typography
        variant="h5"
        component="div"
        color="textSecondary"
        style={{ margin: 16, textAlign: 'center' }}
      >
        Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec.

      </Typography>
      <div style={{ height: 30 }} />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {/* <img src="../../assets/img/landing/avatar3.png" alt="react" style={{ width: 150 }} />
        <img src="../../assets/img/landing/avatar.png" alt="react" style={{ width: 150 }} />
        <img src="../../assets/img/landing/avatar2.png" alt="react" style={{ width: 150 }} /> */}
      </div>
      <div style={{ height: 50 }} />
    </>
  )
}

export default PageContent

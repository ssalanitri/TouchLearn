import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Container from '@material-ui/core/Container';
import { useTheme,
         createMuiTheme,
         makeStyles, 
         MuiThemeProvider, 
         withStyles } from '@material-ui/core/styles';

import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

const drawerWidth = 240;
const contentContainerWidth = 400;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00F"
    }
  },
  typography: {
    body1: {
      fontFamily: "Comic Sans"
    }
  },
  custom: {
    myOwnComponent: {
      margin: "10px 10px",
      backgroundColor: "lightgreen"
    }
  }
});

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - drawerWidthpx)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  contentContainer: {
    height: '90%',
    width: '60%',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    textAlign: 'center',
  },
  drawerContent: {
    flexGrow: 1,
    padding: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  navbar: {
    backgroundColor: 'primary', 
  },
  navText: {
    marginLeft:'-1%',
    marginTop:'-1%',
    float: 'left',
  },
  navbarLight:{
    color: 'black',
    '&:hover': { 
      color: 'white', 
    },
  }, 
  navLink:{
    color: 'black',
    '&:hover': { 
      color: 'white', 
    },
  }, 
  navbarNav:{
    color: 'black',
    '&:hover': { 
      color: 'white', 
    },
  },
  a: {
    color: 'black',
    '&:hover': { 
      color: 'white', 
    },
  },
  navbarBrand: {
    fontSize: '1.4em',
    color: 'black',
    '&:hover': { 
      color: 'white',
     },
  },
  formCenter: {
    position: 'absolute !important',
    left: '25%',
    right: '25%',
  },
});

const MainDrawer = ({children}) =>{
  
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const classes = useStyles();
  
  
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
     setOpen(false);
  };

   
    return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
           {/* <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light">
           <Navbar expand='lg' 
                   className={classNames(classes.navLink,
                                         classes.navbar,
                                         classes.navbarBrand,
                                         classes.navbarNav,
                                         classes.navbarLight,
                                         )} > */}
           <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
        
            </IconButton>
              <Typography variant='h6'>
                  Touch Learn
              </Typography>                                         
                {/* <Navbar.Brand href="/"> Touch Learn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                  </Nav>
                </Navbar.Collapse> */}
          </Toolbar>
          {/* </Navbar> */}
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Products', 'Reports', 'Supports'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.drawerContent, {
            [classes.contentShift]: open,
          })}
        >
            <Container align='center'>
              <div className={classes.contentContainer} > 
                {children}
              </div> 
            </Container>
        </main>
      </div>
    </MuiThemeProvider>
    );
  }


Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default withStyles(useStyles, { withTheme: true })(MainDrawer);

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useTheme from '@material-ui/core/styles/useTheme'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },

  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',

    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  logoContainer: {
    padding: 0,
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: '10px',
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    margin: '0 25px 0 50px ',
    borderRadius: '50px',
    color: 'white',
    height: '45px',
  },
  menu: {
    background: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px',
  },
  MenuItem: {
    opacity: 0.7,
    color: 'white',
    fontSize: 16,

    '&:hover,&:focus': {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    color: 'white',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
}))

const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const classes = useStyles()

  // const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  // const [selectedIndex, setSelectedIndex] = useState(0)

  const handleMouseOver = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    // handleClose()
  }

  const menuOptions = [
    { name: 'Services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'iOS/Android App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ]

  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaHaspopup: anchorEl ? 'true' : undefined,
      mouseOver: handleMouseOver,
    },
    { name: 'The Revolution', link: '/revolution', activeIndex: 2 },
    { name: 'About Us', link: '/about', activeIndex: 3 },
    { name: 'Contact Us', link: '/contact', activeIndex: 4 },
  ]

  useEffect(() => {
    ;[...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex)

            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex)
            }
          }
          break

        default:
          break
      }
    })
  }, [menuOptions, routes, value, selectedIndex, setValue, setSelectedIndex])

  const tabs = (
    <>
      <Tabs
        value={value}
        indicatorColor='primary'
        onChange={(e, value) => setValue(value)}
        className={classes.tabContainer}
      >
        {routes.map((route) => (
          <Tab
            key={route.link}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.link !== '/services' ? null : route.ariaOwns}
            aria-haspopup={
              route.link !== '/services' ? null : route.ariaHasPopup
            }
            onMouseOver={route.link !== '/services' ? null : handleMouseOver}
          />
        ))}
      </Tabs>
      <Button
        className={classes.button}
        component={Link}
        to='/estimate'
        variant='contained'
        color='secondary'
        onClick={() => setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        keepMounted
        style={{ zIndex: 1302 }}
        id='simple-menu'
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        open={openMenu}
        elevation={0}
        classes={{ paper: classes.menu }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option.link}
            component={Link}
            to={option.link}
            classes={{ root: classes.MenuItem }}
            selected={index === selectedIndex && value === 1}
            onClick={(event) => {
              handleMenuItemClick(event, index)
              setValue(1)
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  const drawer = (
    <>
      <IconButton
        className={classes.drawerIconContainer}
        disableFocusRipple
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <div className={classes.toolbarMargin} />

        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              key={index}
              divider
              button
              component={Link}
              to={`${route.link}`}
              selected={value === index}
              onClick={() => {
                setOpenDrawer(false)
                setValue(index)
              }}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            className={classes.drawerItemEstimate}
            selected={value === 5}
            divider
            button
            component={Link}
            to='/estimate'
            onClick={() => {
              setOpenDrawer(false)
              setValue(5)
            }}
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to='/'
              onClick={() => setValue(0)}
            >
              <img src={logo} alt='arc development' className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}

export default Header

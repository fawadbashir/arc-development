import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'

import FooterAdornment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    zIndex: 1302,
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    fontFamily: 'Arial',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: '700',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },

  iconContainer: {
    position: 'absolute',
    right: '1.5em',
    bottom: '1.4em',
    marginTop: '-6em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
  socialIcon: {
    width: '4em',
    height: '4em',
    [theme.breakpoints.down('xs')]: {
      width: '2.5em',
      height: '2.5em',
    },
  },
}))

const Footer = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid
                component={Link}
                onClick={() => {
                  setValue(0)
                }}
                to='/'
                item
                className={classes.link}
              >
                {' '}
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setSelectedIndex(0)
                  setValue(1)
                }}
                to='/services'
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setSelectedIndex(1)
                  setValue(1)
                }}
                to='/customsoftware'
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setSelectedIndex(2)
                  setValue(1)
                }}
                to='/mobileapp'
                className={classes.link}
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setSelectedIndex(3)
                  setValue(1)
                }}
                to='/website'
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to='/revolution'
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to='/vision'
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(2)}
                to='/technology'
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                to='/process'
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction='column'>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/about'
                className={classes.link}
              >
                About Us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/history'
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/team'
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                component={Link}
                onClick={() => setValue(4)}
                to='/contact'
                item
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adornment}
        src={FooterAdornment}
        alt='Black decorative slash'
      />
      <Grid
        container
        alignItems='center'
        justify='flex-end'
        spacing={2}
        className={classes.iconContainer}
      >
        <Grid
          item
          component={'a'}
          href='http://www.facebook.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img className={classes.socialIcon} src={facebook} alt='facebook' />
        </Grid>
        <Grid
          item
          component={'a'}
          href='http://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img className={classes.socialIcon} src={twitter} alt='' />
        </Grid>
        <Grid
          item
          component={'a'}
          href='http://www.instagram.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img className={classes.socialIcon} src={instagram} alt='' />
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer

import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'react-router-dom'

import ArrowButton from './ui/ArrowButton'

import mobileAppsIcon from '../assets/mobileIcon.svg'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import websiteIcon from '../assets/websiteIcon.svg'

const useStyles = makeStyles((theme) => ({
  subtitle: {
    marginBottom: '1em',
  },
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  softwareTextContainer: {
    marginLeft: '5em',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      // marginBottom : '1em'
    },
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0',
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: '35px',
    padding: '5px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1em',
    },
  },
}))

const Services = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid
      container
      direction='column'
      alignItems={matchesSM ? 'center' : 'flex-start'}
    >
      <Grid item style={{ margin: !matchesSM ? '2em 0 0 5em' : '1em 0 0 0' }}>
        <Typography variant='h2'>Services</Typography>
      </Grid>
      <Grid
        item
        container
        style={{ marginTop: '5em' }}
        justify={matchesSM ? 'center' : 'flex-end'}
      >
        <Grid
          item
          className={classes.softwareTextContainer}
          style={{ width: matchesSM ? 'inherit' : '35em' }}
        >
          <Typography variant='h4'>iOS/Android App Development</Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Extend Functionality. Extend Access. Increase Engagement
          </Typography>
          <Typography variant='subtitle1'>
            Integrate your web experience or create a standalone app <br />
            with either mobile platform.
          </Typography>

          <Button
            component={Link}
            to='/customSoftware'
            variant='outlined'
            className={classes.learnButton}
            color='primary'
          >
            <span style={{ marginRight: 5 }}>Learn More</span>
            <ArrowButton
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? '0' : '5em' }}>
          <img
            className={classes.icon}
            src={mobileAppsIcon}
            alt='Mobile Apps Icon'
            width='250px'
          />
        </Grid>
      </Grid>
      <Grid item container>
        {/* Custom Software Block */}
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-start'}
          alignItems={matchesSM ? 'center' : 'flex-start'}
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item className={classes.softwareTextContainer}>
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy, Save Time, Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              component={Link}
              to='/customSoftware'
              variant='outlined'
              className={classes.learnButton}
              color='primary'
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ArrowButton
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftwareIcon}
              alt='Custom Software Icon'
              width='250px'
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={`${classes.serviceContainer} `}
        justify={matchesSM ? 'center' : 'flex-end'}
        alignItems='center'
        direction={matchesSM ? 'column' : 'row'}
        style={{ marginBottom: '10em' }}
      >
        <Grid
          item
          className={classes.softwareTextContainer}
          style={{ width: matchesSM ? 'inherit' : '35em' }}
        >
          <Typography variant='h4'>Website Development</Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant='subtitle1'>
            Optimized for Search Engines, built for speed.
          </Typography>
          <Button
            component={Link}
            to='/websites'
            variant='outlined'
            className={classes.learnButton}
            color='primary'
          >
            <span style={{ marginRight: 5 }}>Learn More</span>
            <ArrowButton
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? '0' : '5em' }}>
          <img className={classes.icon} src={websiteIcon} alt='website Icon' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services

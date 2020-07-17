import React from 'react'
import Lottie from 'react-lottie'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ArrowButton from './ui/ArrowButton'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import animationData from '../animations/landinganimation/data'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import RevolutionBackground from '../assets/repeatingBackground.svg'
import InfoBackground from '../assets/infoBackground.svg'

const useStyles = makeStyles((theme) => ({
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    marginRight: '2rem',
    borderRadius: '50px',
    color: 'white',
    height: '45px',
    width: '145px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    width: '145px',
    height: '45px',
    marginLeft: '0.5rem',
    fontSize: '0.9rem',
  },
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '30em',
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '23.3em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
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
  serviceContainer: {
    marginTop: '12em',
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
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  mobileAppContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('md')]: {
      padding: '25px',
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${RevolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: '15px',
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: '8em 0 8em 0',
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${InfoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}))

const LandingPage = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container className={classes.mainContainer} direction='column'>
      {/* Hero Block */}
      <Grid sm item className={classes.heroBlock}>
        <Grid container direction='row' justify='flex-end' alignItems='center'>
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant='h2' align='center'>
              Bringing West Coast Technology <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  variant='contained'
                  className={classes.estimate}
                  color='secondary'
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant='outlined'
                  className={classes.learnButtonHero}
                  color='primary'
                >
                  Learn More
                  <ArrowButton
                    width={'15px'}
                    height={'15px'}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie width={'100%'} height={'100%'} options={defaultOptions} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
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
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Mobile App Block */}
      <Grid item>
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
          alignItems='center'
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app{' '}
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              variant='outlined'
              className={classes.learnButton}
              color='primary'
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ArrowButton
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt='Mobile Apps Icon'
            />
          </Grid>
          <Grid></Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Website Development */}
        <Grid
          container
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-start'}
          alignItems='center'
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid item className={classes.softwareTextContainer}>
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
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
              src={websiteIcon}
              alt='website Icon'
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Revolution Block */}
      <Grid item>
        <Grid
          container
          style={{ height: '100em', marginTop: '12em' }}
          justify='center'
          alignItems='center'
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    color='primary'
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ArrowButton
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/* Info Block */}
      <Grid item>
        <Grid
          container
          className={classes.infoBackground}
          style={{ height: '80em' }}
          alignItems='center'
        >
          <Grid
            item
            container
            direction={matchesXS ? 'column' : 'row'}
            alignItems='center'
            style={{ textAlign: matchesXS ? 'center' : 'inherit' }}
            spacing={matchesXS ? 10 : 0}
          >
            <Grid
              item
              sm
              style={{
                marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'left',
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>

                <Typography variant='subtitle2'>let's get personal</Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    color='primary'
                    style={{ color: 'white', borderColor: 'white' }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ArrowButton width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'right',
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>

                <Typography variant='subtitle2'>
                  Say hello
                  <span role='img' aria-label='hello emoji'>
                    👋
                  </span>
                </Typography>

                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    color='primary'
                    style={{ color: 'white', borderColor: 'white' }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ArrowButton width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage

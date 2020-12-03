import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Snackbar from '@material-ui/core/Snackbar'
import ArrowButton from './ui/ArrowButton'

import { Link } from 'react-router-dom'

import airplane from '../assets/send.svg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    // width: '100%',
    height: '60em',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '10em',
    // backgroundAttachment: 'fixed',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },

  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    marginLeft: '2em',
    marginRight: '5em',
    borderRadius: '50px',
    fontSize: '1.5rem',
    color: 'white',
    height: '80px',
    width: '205px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: '35px',
    padding: '5px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },

  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  dialogContainer: {
    padding: '5em 20em',

    [theme.breakpoints.down('md')]: {
      padding: '5em 15em',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '5em 0em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1em 0em',
    },
  },
}))

const Contact = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('')
  const [message, setMessage] = useState('')

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  })

  const onChange = (e) => {
    let valid
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        )

        if (!valid) {
          setEmailHelper('invalid Email')
        } else {
          setEmailHelper('')
        }

        break
      case 'phone':
        setPhone(e.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        )

        if (!valid) {
          setPhoneHelper('invalid Phone')
        } else {
          setPhoneHelper('')
        }
        break

      default:
        break
    }
  }

  const onConfirm = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setOpen(false)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setAlert({
        open: true,
        message: 'Message sent succesfully',
        backgroundColor: '#4BB543',
      })
    }, 1000)
  }

  const buttonContents = (
    <>
      Send Message
      <img
        src={airplane}
        alt='paper airplane'
        style={{ marginLeft: '1em', verticalAlign: 'middle' }}
      />
    </>
  )

  return (
    <Grid container>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        lg={4}
        xl={3}
        style={{
          marginTop: matchesMD ? '5em' : '0',
          marginBottom: matchesMD ? '5em' : '0',
        }}
      >
        <Grid item>
          <Grid
            container
            direction='column'
            // justify='center'
            // alignItems='center'
            // lg={3}
          >
            <Grid item>
              <Typography variant='h2' style={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
              <Typography
                variant='body1'
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting
              </Typography>
            </Grid>
            <Grid
              container
              item
              style={{ marginTop: '2em' }}
              // alignItems='flex-end'
            >
              <Grid item>
                <img
                  src={phoneIcon}
                  alt='phone'
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  component={Link}
                  to='tel:3163589320'
                  paragraph
                  style={{
                    color: 'rgb(11, 114, 185)',
                    fontSize: '1rem',
                    textDecoration: 'none',
                  }}
                  align='center'
                >
                  (316) 358-9320
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt='envelope'
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item style={{ textDecoration: 'none' }}>
                <Typography
                  variant='body1'
                  component={Link}
                  to='mailto:zachary@arcsoftwaredevelopment.com'
                  paragraph
                  style={{
                    color: 'rgb(11, 114, 185)',
                    fontSize: '1rem',
                    textDecoration: 'none',
                  }}
                  align='center'
                >
                  zachary@arcsoftwaredevelopment.com
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='column'
              style={{ maxWidth: matchesXS ? '100%' : '20em' }}
            >
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  fullWidth
                  variant='standard'
                  label='Name'
                  color='primary'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  fullWidth
                  variant='standard'
                  label='Email'
                  name='email'
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  variant='standard'
                  label='Phone'
                  name='phone'
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                InputProps={{ underline: 'false' }}
                className={classes.message}
                multiline
                variant='outlined'
                rows={10}
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item container justify='center' style={{ marginTop: '2em' }}>
              <Button
                variant='contained'
                className={classes.sendButton}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0
                }
                onClick={() => setOpen(true)}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        fullScreen={matchesSM}
        open={open}
        style={{ zIndex: 1302, position: 'fixed' }}
        onClose={() => setOpen(false)}
        PaperProps={{ classes: { root: classes.dialogContainer } }}
      >
        <DialogContent>
          <Grid container direction='column' justify='center'>
            <Grid item>
              <Typography variant='h4' align='center'>
                Confirm Message
              </Typography>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  fullWidth
                  variant='standard'
                  label='Name'
                  color='primary'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  fullWidth
                  variant='standard'
                  label='Email'
                  name='email'
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  variant='standard'
                  label='Phone'
                  name='phone'
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>

              <Grid item>
                <TextField
                  fullWidth
                  InputProps={{ underline: 'false' }}
                  className={classes.message}
                  multiline
                  variant='outlined'
                  rows={10}
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid
                item
                container
                alignItems='center'
                style={{ marginTop: '2em' }}
                justify='center'
              >
                <Grid item>
                  <Button
                    color='primary'
                    onClick={() => setOpen(false)}
                    style={{ fontWeight: 300 }}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='contained'
                    className={classes.sendButton}
                    onClick={onConfirm}
                  >
                    {loading ? <CircularProgress size={30} /> : buttonContents}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      {/* //CallTo action */}
      <Grid
        item
        container
        className={classes.background}
        alignItems='center'
        direction={matchesMD ? 'column' : 'row'}
        justify={matchesMD ? 'center' : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            // marginRight: matchesMD ? 0 : '2em',
          }}
        >
          <Grid
            container
            direction='column'
            alignItems={matchesMD ? 'center' : 'flex-start'}
            style={{ textAlign: matchesMD ? 'center' : 'inherit' }}
          >
            <Grid item>
              <Typography variant='h2'>
                Simple Software. <br /> Revolutionary Results.
              </Typography>
              <Typography variant='subtitle2'>
                Take advantage of the 21st Century.
              </Typography>
            </Grid>

            <Grid item>
              <Button
                component={Link}
                to='/revolution'
                variant='outlined'
                className={classes.learnButton}
                color='primary'
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ArrowButton width={10} height={10} fill='blue' />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg>
          <Button
            component={Link}
            to='/estimate'
            variant='contained'
            className={classes.estimate}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact

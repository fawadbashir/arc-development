import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import ArrowButton from '../ui/ArrowButton'

import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

const useStyles = makeStyles((theme) => ({
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
		[theme.breakpoints.down('sm')]: {
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
	background: {
		backgroundImage: `url(${background})`,
		width: '100%',
		height: '60em',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
		[theme.breakpoints.down('md')]: {
			backgroundImage: `url(${mobileBackground})`,
			backgroundAttachment: 'inherit',
		},
	},
}))

const CallToAction = () => {
	const classes = useStyles()
	const theme = useTheme()
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Grid
			container
			direction={matchesSM ? 'column' : 'row'}
			justify={matchesSM ? 'center' : 'space-between'}
			alignItems='center'
			className={classes.background}
		>
			<Grid
				item
				style={{
					marginLeft: matchesSM ? 0 : '5em',
					marginRight: matchesSM ? 0 : '2em',
				}}
			>
				<Grid
					container
					direction='column'
					alignItems={matchesSM ? 'center' : 'flex-start'}
					style={{ textAlign: matchesSM ? 'center' : 'inherit' }}
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
			<Grid item>
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
	)
}

export default CallToAction

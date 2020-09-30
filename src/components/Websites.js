import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Hidden from '@material-ui/core/Hidden'
import { useTheme, makeStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'

import CallToAction from './ui/CallToAction'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import Analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'

const useStyles = makeStyles((theme) => ({
	heading: {
		maxWidth: '40em',
		[theme.breakpoints.down('md')]: {
			textAlign: 'center',
		},
	},
	arrowContainer: {
		marginTop: '0.5em',
	},
	rowContainer: {
		padding: '0em 5em',
		[theme.breakpoints.down('sm')]: {
			paddingRight: '1.5em',
			paddingLeft: '1.5em',
			// paddinTop: '1em',
		},
	},
	paragraphContainer: {
		maxWidth: '30em',
	},
}))

const Websites = (props) => {
	const classes = useStyles()
	const theme = useTheme()
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

	return (
		<Grid container direction='column'>
			<Grid
				item
				container
				justify={matchesMD ? 'center' : 'flex-start'}
				style={{ marginTop: matchesXS ? '1em' : '2em' }}
				className={classes.rowContainer}
			>
				<Hidden mdDown>
					<Grid
						item
						style={{ marginRight: '1em', marginLeft: '-3.5em' }}
						className={classes.arrowContainer}
					>
						<IconButton
							component={Link}
							to='/customsoftware'
							style={{ backgroundColor: 'transparent' }}
							onClick={() => props.setSelectedIndex(2)}
						>
							<img src={backArrow} alt='back Arrow' />
						</IconButton>
					</Grid>
				</Hidden>
				<Grid item container direction='column' className={classes.heading}>
					<Grid item>
						<Typography variant='h2' component='h1'>
							Website Development
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' paragraph>
							Having a website is a necessity in today’s business world. They
							give you one central, public location to let people know who you
							are, what you do, and why you’re the best at it.
						</Typography>
						<Typography variant='body1' paragraph>
							From simply having your hours posted to having a full fledged
							online store, making yourself as accessible as possible to users
							online drives growth and enables you to reach new customers.
						</Typography>
					</Grid>
				</Grid>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer}>
						<IconButton
							component={Link}
							to='/services'
							style={{ backgroundColor: 'transparent' }}
							onClick={() => props.setSelectedIndex(0)}
						>
							<img src={forwardArrow} alt='forward Arrow' />
						</IconButton>
					</Grid>
				</Hidden>
			</Grid>
			<Grid
				item
				container
				className={classes.rowContainer}
				style={{ marginTop: '15em' }}
				alignItems='center'
				direction={matchesSM ? 'column' : 'row'}
			>
				<Grid item>
					<Grid container direction='column'>
						<Grid item>
							<Typography
								variant='h4'
								align={matchesSM ? 'center' : 'left'}
								gutterBottom
							>
								Analytics
							</Typography>
						</Grid>
						<Grid item>
							<img
								src={Analytics}
								style={{ marginLeft: '-2.75rem' }}
								alt="graph with magnifying glass revealing 1's and 0's"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.paragraphContainer}>
					<Typography variant='body1' align={matchesSM ? 'center' : 'left'}>
						Knowledge is power, and data is 21st Century gold. Analyzing this
						data can reveal hidden patterns and trends in your business,
						empowering you to make smarter decisions with measurable effects.
					</Typography>
				</Grid>
			</Grid>
			<Grid
				item
				container
				justify='flex-end'
				direction={matchesSM ? 'column' : 'row'}
				className={classes.rowContainer}
				alignItems='center'
				style={{ margin: '15em 0' }}
			>
				<Grid item>
					<Grid container direction='column' alignItems='center'>
						<Grid item>
							<Typography variant='h4' gutterBottom>
								E-Commerce
							</Typography>
						</Grid>
						<Grid item>
							<img src={ecommerce} alt='world outline made of dollar signs' />
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					className={classes.paragraphContainer}
					style={{ marginLeft: matchesSM ? 0 : '1em' }}
				>
					<Typography
						variant='body1'
						paragraph
						align={matchesSM ? 'center' : 'left'}
					>
						It’s no secret that people like to shop online.
					</Typography>
					<Typography
						variant='body1'
						paragraph
						align={matchesSM ? 'center' : 'left'}
					>
						In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
						for your slice of that pie.
					</Typography>
				</Grid>
			</Grid>
			<Grid
				item
				container
				className={classes.rowContainer}
				alignItems='center'
				direction={matchesSM ? 'column' : 'row'}
			>
				<Grid item>
					<Grid container direction='column'>
						<Grid item>
							<Typography
								variant='h4'
								align={matchesSM ? 'center' : 'left'}
								gutterBottom
							>
								Outreach
							</Typography>
						</Grid>
						<Grid item>
							<img
								src={outreach}
								// style={{ marginLeft: '-2.75rem' }}
								alt="graph with magnifying glass revealing 1's and 0's"
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					className={classes.paragraphContainer}
					style={{ marginLeft: matchesSM ? 0 : '1em' }}
				>
					<Typography variant='body1' align={matchesSM ? 'center' : 'left'}>
						Draw people in with a dazzling website. Showing off your products
						online is a great way to help customers decide what’s right for them
						before visiting in person.
					</Typography>
				</Grid>
			</Grid>
			<Grid
				item
				container
				justify='flex-end'
				direction={matchesSM ? 'column' : 'row'}
				className={classes.rowContainer}
				alignItems='center'
				style={{ margin: '15em 0' }}
			>
				<Grid item>
					<Grid container direction='column' alignItems='center'>
						<Grid item>
							<Typography variant='h4' gutterBottom align='center'>
								Search Engine <br /> Optimization
							</Typography>
						</Grid>
						<Grid item>
							<img src={seo} alt='world outline made of dollar signs' />
						</Grid>
					</Grid>
				</Grid>
				<Grid
					item
					className={classes.paragraphContainer}
					style={{ marginLeft: matchesSM ? 0 : '1em' }}
				>
					<Typography
						variant='body1'
						paragraph
						align={matchesSM ? 'center' : 'left'}
					>
						How often have you ever been to the second page of Google results?
					</Typography>
					<Typography
						variant='body1'
						paragraph
						align={matchesSM ? 'center' : 'left'}
					>
						If you’re like us, probably never.
					</Typography>
					<Typography
						variant='body1'
						paragraph
						align={matchesSM ? 'center' : 'left'}
					>
						Customers don’t go there either, so we make sure your website is
						designed to end up on top.
					</Typography>
				</Grid>
			</Grid>
			<Grid item>
				<CallToAction />
			</Grid>
		</Grid>
	)
}

export default Websites

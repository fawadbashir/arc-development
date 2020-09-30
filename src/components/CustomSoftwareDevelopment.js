import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'

import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import lightbulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import rootTree from '../assets/root.svg'
import documentsData from '../animations/documentsAnimation/data'
import scaleData from '../animations/scaleAnimation/data'
import automationData from '../animations/automationAnimation/data'
import uxData from '../animations/uxAnimation/data'

import CallToAction from './ui/CallToAction'

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
		// padding: '2em 5em 10em 5em',
		padding: '0em 5em',
		[theme.breakpoints.down('sm')]: {
			paddingRight: '1.5em',
			paddingLeft: '1.5em',
			// paddinTop: '1em',
		},
	},
	itemContainer: {
		maxWidth: '40em',
	},
}))

const CustomSoftwareDevelopment = (props) => {
	const classes = useStyles()
	const theme = useTheme()
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
	const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

	const documnentsOptions = {
		loop: true,
		autoplay: true,
		animationData: documentsData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	const scaleOptions = {
		loop: true,
		autoplay: true,
		animationData: scaleData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	const automationOptions = {
		loop: true,
		autoplay: true,
		animationData: automationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}
	const uxOptions = {
		loop: true,
		autoplay: true,
		animationData: uxData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	return (
		<Grid container direction='column' className={classes.mainContainer}>
			<Grid
				item
				container
				justify={matchesMD ? 'center' : 'flex-start'}
				className={classes.rowContainer}
				style={{ marginTop: matchesXS ? '1em' : '2em' }}
			>
				<Hidden mdDown>
					<Grid
						item
						className={classes.arrowContainer}
						style={{ marginRight: '1em', marginLeft: '-3.5em' }}
					>
						<IconButton
							component={Link}
							to='/services'
							onClick={() => props.setSelectedIndex(0)}
							style={{ backgroundColor: 'transparent' }}
						>
							<img src={backArrow} alt='back Arrow' />
						</IconButton>
					</Grid>
				</Hidden>

				<Grid item container className={classes.heading} direction='column'>
					<Grid item>
						<Typography variant='h2'>Custom Software Development</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' paragraph>
							Whether we’re replacing old software or inventing new solutions,
							Arc Development is here to help your business tackle technology.{' '}
						</Typography>
						<Typography variant='body1' paragraph>
							Using regular commercial software leaves you with a lot of stuff
							you don’t need, without some of the stuff you do need, and
							ultimately controls the way you work. Without using any software
							at all you risk falling behind competitors and missing out on huge
							savings from increased efficiency.
						</Typography>
						<Typography variant='body1' paragraph>
							Our custom solutions are designed from the ground up with your
							needs, wants, and goals at the core. This collaborative process
							produces finely tuned software that is much more effective at
							improving your workflow and reducing costs than generalized
							options.
						</Typography>
						<Typography variant='body1' paragraph>
							We create exactly what you what, exactly how you want it.
						</Typography>
					</Grid>
				</Grid>
				<Hidden mdDown>
					<Grid item className={classes.arrowContainer}>
						<IconButton
							onClick={() => props.setSelectedIndex(2)}
							component={Link}
							to='/mobileapps'
						>
							<img src={forwardArrow} alt='forward Arrow' />
						</IconButton>
					</Grid>
				</Hidden>
			</Grid>
			<Grid item className={classes.rowContainer}>
				<Grid
					container
					direction={matchesSM ? 'column' : 'row'}
					justify='center'
					alignItems='center'
					style={{ marginTop: '15em', marginBottom: '20em' }}
				>
					<Grid
						item
						container
						direction='column'
						alignItems='center'
						style={{ maxWidth: '40em' }}
						md
					>
						<Grid item>
							<Typography variant='h4'>Save Energy</Typography>
						</Grid>
						<Grid item>
							<img src={lightbulb} alt='lightbulb' />
						</Grid>
					</Grid>

					<Grid
						item
						container
						direction='column'
						alignItems='center'
						md
						style={{ maxWidth: '40em', margin: matchesSM ? '10em 0' : '' }}
					>
						<Grid item>
							<Typography variant='h4'>Save Time</Typography>
						</Grid>
						<Grid item>
							<img src={stopwatch} alt='stopwatch' />
						</Grid>
					</Grid>
					<Grid
						item
						container
						direction='column'
						alignItems='center'
						md
						style={{ maxWidth: '40em' }}
					>
						<Grid item>
							<Typography variant='h4'>Save Money</Typography>
						</Grid>
						<Grid item>
							<img src={cash} alt='money' />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				justify='space-between'
				className={classes.rowContainer}
				alignItems={matchesMD ? 'center' : 'flex-start'}
				direction={matchesMD ? 'column' : 'row'}
				style={{ textAlign: matchesSM ? 'center' : 'inherit' }}
			>
				<Grid
					item
					container
					justify='space-between'
					className={classes.itemContainer}
					direction={matchesSM ? 'column' : 'row'}
					style={{ marginBottom: matchesMD ? '15em' : 0 }}
					md
				>
					<Grid item container direction='column' md>
						<Grid item>
							<Typography variant='h4'>Digital Documents & Data</Typography>
						</Grid>
						<Grid item>
							<Typography variant='body1' paragraph>
								Reduce Errors. Reduce Waste. Reduce Costs.
							</Typography>
							<Typography variant='body1' paragraph>
								Billions are spent annually on the purchasing, printing, and
								distribution of paper. On top of the massive environmental
								impact this has, it causes harm to your bottom line as well.
							</Typography>
							<Typography variant='body1' paragraph>
								By utilizing digital forms and documents you can remove these
								obsolete expenses, accelerate your communication, and help the
								Earth.
							</Typography>
						</Grid>
					</Grid>
					<Grid item md>
						<Lottie
							options={documnentsOptions}
							style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
						/>
					</Grid>
				</Grid>
				<Grid
					item
					container
					alignItems='center'
					justify='space-between'
					className={classes.itemContainer}
					direction={matchesSM ? 'column' : 'row'}
				>
					<Grid item md>
						<Lottie
							options={scaleOptions}
							style={{ maxHeight: 260, maxWidth: 280 }}
						/>
					</Grid>
					<Grid item container direction='column' md>
						<Grid item>
							<Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
								Scale
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								align={matchesSM ? 'center' : 'right'}
							>
								Whether you’re a large brand, just getting started, or taking
								off right now, our application architecture ensures pain-free
								growth and reliability
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction='column'
				alignItems='center'
				style={{
					marginTop: '20em',
					marginBottom: '20em',
					textAlign: 'center',
				}}
				className={classes.rowContainer}
			>
				<Grid item>
					<img
						src={rootTree}
						alt='tree'
						height={matchesSM ? '300em' : '450em'}
						width={matchesSM ? '300em' : '450em'}
					/>
				</Grid>
				<Grid
					item
					className={classes.itemContainer}
					style={{ textAlign: 'center' }}
				>
					<Typography variant='h4' gutterBottom>
						Root-Cause Analysis
					</Typography>
					{/* </Grid> */}
					{/* <Grid item className={classes.itemContainer}> */}
					<Typography variant='body1' align='center' paragraph>
						Many problems are merely symptoms of larger, underlying issues.
					</Typography>
					<Typography variant='body1' align='center' paragraph>
						We can help you thoroughly examine all areas of your business to
						develop a holistic plan for the most effective implementation of
						technology.
					</Typography>
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction={matchesMD ? 'column' : 'row'}
				alignItems={matchesMD ? 'center' : 'flex-start'}
				justify='space-between'
				className={classes.rowContainer}
				style={{ marginBottom: '20em' }}
			>
				<Grid
					item
					container
					className={classes.itemContainer}
					md
					direction={matchesSM ? 'column' : 'row'}
					style={{
						marginBottom: matchesMD ? '15em' : 0,
						textAlign: matchesSM ? 'center' : 'inherit ',
					}}
				>
					<Grid item container direction='column' md>
						<Grid item>
							<Typography variant='h4'>Automation</Typography>
						</Grid>
						<Grid item>
							<Typography variant='body1' paragraph>
								Why waste time when you don’t have to?
							</Typography>

							<Typography variant='body1' paragraph>
								We can help you identify processes with time or event based
								actions which can now easily be automated.
							</Typography>
							<Typography variant='body1' paragraph>
								Increasing efficiency increases profits, leaving you more time
								to focus on your business, not busywork.
							</Typography>
						</Grid>
					</Grid>
					<Grid item md>
						<Lottie
							options={automationOptions}
							style={{ maxHeight: 290, maxWidth: 280 }}
						/>
					</Grid>
				</Grid>
				<Grid
					item
					container
					className={classes.itemContainer}
					md
					direction={matchesSM ? 'column' : 'row'}
					style={{
						marginBottom: matchesMD ? '15em' : 0,
					}}
				>
					<Grid item md>
						{' '}
						<Lottie
							options={uxOptions}
							style={{ maxHeight: 310, maxWidth: 155 }}
						/>
					</Grid>
					<Grid item container direction='column' md>
						<Grid item>
							<Typography variant='h4' align={matchesSM ? 'center' : 'right'}>
								User Experience Desgin
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								variant='body1'
								paragraph
								align={matchesSM ? 'center' : 'right'}
							>
								A good design that isn’t usable isn’t a good design.
							</Typography>
							<Typography
								variant='body1'
								paragraph
								align={matchesSM ? 'center' : 'right'}
							>
								So why are so many pieces of software complicated, confusing,
								and frustrating?
							</Typography>
							<Typography
								variant='body1'
								paragraph
								align={matchesSM ? 'center' : 'right'}
							>
								By prioritizing users and the real ways they interact with
								technology we’re able to develop unique, personable experiences
								that solve problems rather than create new ones.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container>
				<CallToAction setValue={props.setValue} />
			</Grid>
		</Grid>
	)
}

export default CustomSoftwareDevelopment

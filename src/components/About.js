import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

import CallToAction from './ui/CallToAction'

import history from '../assets/history.svg'

import profile from '../assets/founder.jpg'
import yearbook from '../assets/yearbook.svg'
import puppy from '../assets/puppy.svg'

const useStyles = makeStyles((theme) => ({
	rowContainer: {
		padding: '0em 5em',
		[theme.breakpoints.down('sm')]: {
			paddingRight: '1.5em',
			paddingLeft: '1.5em',
			// paddinTop: '1em',
		},
		[theme.breakpoints.down('xs')]: {
			paddingRight: '1em',
			paddingLeft: '1em',
		},
	},
	missionStatement: {
		fontStyle: 'italic',
		fontWeight: 300,
		fontSize: '1.5rem',
		maxWidth: '50em',
		lineHeight: 1.4,
	},
	avatar: {
		width: '25em',
		height: '25em',
		[theme.breakpoints.down('sm')]: {
			width: '20em',
			height: '20em',
			maxWidth: 300,
			maxHeight: 300,
		},
	},
}))
const About = () => {
	const classes = useStyles()
	const theme = useTheme()
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Grid container direction='column'>
			<Grid
				item
				className={classes.rowContainer}
				style={{ marginTop: matchesMD ? '1em' : '2em' }}
			>
				<Typography variant='h2' align={matchesMD ? 'center' : 'left'}>
					About Us
				</Typography>
			</Grid>
			<Grid
				item
				className={classes.rowContainer}
				style={{ marginTop: '3em', alignSelf: 'center' }}
			>
				<Typography
					variant='h4'
					className={classes.missionStatement}
					align='center'
				>
					Whether it be person to person, business to consumer, or an individual
					to their interests, technology is meant to bring us closer to what we
					care about in the best way possible. Arc Development will use that
					principle to provide fast, modern, inexpensive, and aesthetic software
					to the Midwest and beyond.
				</Typography>
			</Grid>
			<Grid
				item
				container
				className={classes.rowContainer}
				justify='space-between'
				alignItems={matchesMD ? 'center' : undefined}
				style={{ margin: '10em 0' }}
				direction={matchesMD ? 'column' : 'row'}
			>
				<Grid item container direction='column' lg style={{ maxWidth: '35em' }}>
					<Grid item>
						<Typography
							variant='h4'
							gutterBottom
							align={matchesMD ? 'center' : 'left'}
						>
							History
						</Typography>
					</Grid>
					<Grid item>
						<Typography
							variant='body1'
							style={{ fontWeight: 700, fontStyle: 'italic' }}
							paragraph
							align={matchesMD ? 'center' : 'left'}
						>
							We're the new kid on the block
						</Typography>
						<Typography
							variant='body1'
							paragraph
							align={matchesMD ? 'center' : 'left'}
						>
							Founded in 2019, we’re ready to get our hands on the world’s
							business problems.
						</Typography>
						<Typography
							variant='body1'
							paragraph
							align={matchesMD ? 'center' : 'left'}
						>
							It all started with one question: Why aren’t all businesses using
							available technology? There are many different answers to that
							question: economic barriers, social barriers, educational
							barriers, and sometimes institutional barriers.
						</Typography>
						<Typography
							variant='body1'
							paragraph
							align={matchesMD ? 'center' : 'left'}
						>
							We aim to be a powerful force in overcoming these obstacles.
							Recent developments in software engineering and computing power,
							compounded by the proliferation of smart phones, has opened up
							infinite worlds of possibility. Things that have always been done
							by hand can now be done digitally and automatically, and
							completely new methods of interaction are created daily. Taking
							full advantage of these advancements is the name of the game.
						</Typography>
						<Typography
							variant='body1'
							paragraph
							align={matchesMD ? 'center' : 'left'}
						>
							All this change can be a lot to keep up with, and that’s where we
							come in.
						</Typography>
					</Grid>
				</Grid>
				<Grid item>
					<img
						src={history}
						alt='quill pen sitting on top of book'
						style={{ maxHeight: matchesMD ? 200 : '22em' }}
					/>
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction='column'
				alignItems='center'
				className={classes.rowContainer}
				style={{ marginBottom: '15em' }}
			>
				<Grid item>
					<Typography variant='h4' gutterBottom>
						Team
					</Typography>
				</Grid>
				<Grid item>
					{' '}
					<Typography variant='body1' paragraph align='center'>
						Zachary Reece, Founder
					</Typography>
					<Typography variant='body1' paragraph align='center'>
						I started coding when I was 9 years old.
					</Typography>
				</Grid>
				<Grid item>
					<Avatar className={classes.avatar} alt='founder' src={profile} />{' '}
				</Grid>
				<Grid
					item
					container
					direction={matchesMD ? 'column' : 'row'}
					alignItems={matchesMD ? 'center' : undefined}
					justify='space-between'
				>
					<Grid item>
						<Grid
							item
							container
							direction='column'
							alignItems={matchesMD ? 'center' : undefined}
							style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
						>
							<Grid item>
								<img
									src={yearbook}
									alt='yearbook page about founder'
									style={{ maxWidth: matchesMD && '300px' }}
								/>
							</Grid>
							<Grid item>
								<Typography variant='caption'>
									a page from my Sophomore Year
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid
						item
						lg
						style={{
							maxWidth: '45em',
							padding: '1.25em',
							order: matchesMD ? -1 : 0,
						}}
					>
						<Typography variant='body1' paragraph align='center'>
							I taught myself basic coding from a library book in third grade,
							and ever since then my passion has solely been set on learning —
							learning about computers, learning mathematics and philosophy,
							studying design, always just learning.
						</Typography>
						<Typography variant='body1' paragraph align='center'>
							Now I’m ready to apply everything I’ve learned, and to help others
							with the intuition I have developed. I'm currently teaching a
							course about building responsive modern user interfaces on
							Udemy.com as well as beginning work on my first machine learning
							mobile application.
						</Typography>
					</Grid>
					<Grid item>
						<Grid
							container
							direction='column'
							alignItems={matchesMD ? 'center' : undefined}
						>
							<Grid item>
								<img
									src={puppy}
									alt='grey spotted puppy'
									style={{ maxWidth: matchesMD && '300px' }}
								/>
							</Grid>
							<Grid item>
								<Typography variant='caption'>
									my miniature dapple dachshund, Sterling
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container>
				<CallToAction />
			</Grid>
		</Grid>
	)
}

export default About

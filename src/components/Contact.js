import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({}))

const Contact = () => {
	const classes = useStyles()
	const theme = useTheme()
	const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
	const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<Grid container>
			<Grid item></Grid>
		</Grid>
	)
}

export default Contact

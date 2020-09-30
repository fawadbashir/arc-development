import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './ui/theme'
import Header from './ui/Header'
import Footer from './ui/Footer'
import LandingPage from './LandingPage'
import Services from './Services'
import CustomSoftwareDevelopment from './CustomSoftwareDevelopment'
import MobileApps from './MobileApps'
import Websites from './Websites'
import RevolutionPage from './RevolutionPage'
import About from './About'

function App() {
	const [value, setValue] = useState(0)
	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<Router>
					<Header
						value={value}
						setValue={setValue}
						selectedIndex={selectedIndex}
						setSelectedIndex={setSelectedIndex}
					/>
					<Switch>
						<Route exact path='/'>
							<LandingPage
								setValue={setValue}
								setSelectedIndex={setSelectedIndex}
							/>
						</Route>
						<Route exact path='/services'>
							<Services />
						</Route>
						<Route exact path='/customsoftware'>
							<CustomSoftwareDevelopment setSelectedIndex={setSelectedIndex} />
						</Route>
						<Route exact path='/mobileapps'>
							<MobileApps setSelectedIndex={setSelectedIndex} />
						</Route>
						<Route exact path='/websites'>
							<Websites setSelectedIndex={setSelectedIndex} />
						</Route>
						<Route exact path='/revolution'>
							<RevolutionPage />
						</Route>
						<Route exact path='/about'>
							<About />
						</Route>
						<Route exact path='/contact'>
							<div>Contact Us</div>
						</Route>
						<Route exact path='/estimate'>
							<div>Free Estimate</div>
						</Route>
					</Switch>
					<Footer
						value={value}
						setValue={setValue}
						selectedIndex={selectedIndex}
						setSelectedIndex={setSelectedIndex}
					/>
				</Router>
			</ThemeProvider>
		</div>
	)
}

export default App

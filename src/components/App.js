import React,{ useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './ui/theme'
import Header from './ui/Header'
import Footer from './ui/Footer'
import LandingPage from './LandingPage'

function App() {
  const [value, setValue] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        
      <Router>
      <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      <Switch>
      <Route exact path='/'><LandingPage/></Route>
      <Route exact path='/services'><div>Services</div></Route>
      <Route exact path='/customsoftware'><div>Custom Software </div></Route>
      <Route exact path='/mobileapps'><div>Mobile Apps</div></Route>
      <Route exact path='/websites'><div>Websites</div></Route>
      <Route exact  path='/revolution'><div>The Revoultion</div></Route>
      <Route exact path='/about'><div>About US</div></Route>
      <Route exact path='/contact'><div>Contact Us</div></Route>
      <Route exact path='/estimate'><div>Free Estimate</div></Route>
      </Switch>
      <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </Router>
      
      </ThemeProvider>
      
    </div>
  );
}

export default App;
